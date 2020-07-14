import React, { Component } from "react";
import moment from 'moment';
import 'moment/locale/pt-br'
import { ListStyle, Wrapper, ButtonList } from './style';
import Button from '../button';
import ListItem from '../list__item';
import Overlay from '../overlay';
import snoowrapFn from '../../service/api';

moment.locale('pt-BR');
const api = snoowrapFn.getSubreddit('reactjs');
export default class List extends Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            error: false,                       
            posts: [],
            category: null,            
            postsToShow: 0
        }     
    
    } 
    
    componentDidMount(){
        this.getPosts("hot");
    }

    getResponse = async category =>{
        this.setState({
            loading:true,
        })

        try{
            if (category === 'hot') {
                category = await api.getHot({limit: 8})
            }
            else if (category === 'new') {
                category = await api.getNew({limit: 8})
            }
            else if (category === 'rising') {
                category = await api.getRising({limit: 8})
            }
            return category;
        }
        
        catch(error){
            this.setState({
                loading:false,
                error:true
            })
            console.log(error)
        }
    }

    getPosts  = (param) => (        
        this.getResponse(param).then(response => {
            this.setState({
                posts: response,
                category:  param,
                loading:false,
                postsToShow: 10,
                error:false
            })
        })
    )

    loadMore = (postShow) => (
        this.getResponse(this.state.category).then(count => {
            count.fetchMore({amount: postShow + 10}).then(response => {
                this.setState({
                    posts: response,
                    loading:false,
                    postsToShow: postShow + 10,
                    error:false
                })
            })
        })
    )

    render() {
        return(
            <Wrapper>
                <ButtonList>
                    <Button fn={() => this.getPosts("hot")} text="Hot"  />
                    <Button fn={() => this.getPosts("new")} text="News"  />
                    <Button fn={() => this.getPosts("rising")} text="Rising"  />
                </ButtonList>
                <ListStyle >
                    {this.state.posts.map(post => (
                        <ListItem key={post.id} title={post.title} created={moment.unix(post.created).fromNow()} author={post.author.name} url={post.url} imgSrc={post.thumbnail}/>
                    ))}
                </ListStyle>

                <Button fn={() => this.loadMore(this.state.postsToShow)} className={"fill bold"} text="+ Ver mais"  />
                {this.state.loading &&
                    <Overlay/>
                }
            </Wrapper>
        )
      }
}