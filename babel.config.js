module.exports = {
    presets: [
        '@babel/preset-env', // import export, arrow funciton, classes
        '@babel/preset-react' // jsx e outras coisas do react
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}