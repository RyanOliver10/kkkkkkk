exports.paginaInicial = (req, res) => {
   
       
    res.render("index", {
           
           message:  "Salvo com sucesso" 
       });
};

exports.paginaSobre = (req, res) => {
    res.render("sobre/sobre");
};

exports.contato = (req, res) => {
    res.send(`
        <h1>Contato</h1>
    `
    )
}