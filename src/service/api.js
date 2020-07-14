import snoowrap from 'snoowrap';

// Snoowrap é um wrapper para o reddit, facilidanto o consumo dos dados

const snoowrapFn  = new snoowrap({
    clientId: 'Gg4EzQmlGRdvsg', // ID REDDIT
    clientSecret: 'lUXT2TTTReMnfjMCiqrIEk6X6As', // SECRET REDDIT
    userAgent: 'React agent ', //STRING RANDOM USER BROSWER AGENT
    refreshToken: '514966701788-8qV_dAZZg8DPxgYsncXqu7MrvCE', //TOKEN REDDIT
});

export default snoowrapFn;