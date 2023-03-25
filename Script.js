const inputNome = document.getElementById('Nome');
const InputMatricula = document.getElementById('Matricula');
const Telefone = document.getElementById('Telefone');
const Endere_ = document.getElementById('bnt_clear_fild');

const Bnt_cadastra_aluno = document.getElementById('bnt_cadastrar');
const LimparCampo = document.getElementById('bnt_clear_fild');
const Form_ = document.getElementById('id_form');

function ClearCampo() {
      document.getElementById('id_form').reset();
}

Bnt_cadastra_aluno.addEventListener('click', function(event) {
      event.preventDefault();
      if(InputMatricula.value == "" || InputMatricula.value == isNaN ) {
            alert('campo vazio e/ou letras indendificadas');
            ClearCampo();
      } else {
            alert('tudo ok!');
            ClearCampo();
      }
       
});

//let ValorNome ;  let ValorTelefone;
//let ValorMatricula; let ValorEndere;