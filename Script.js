const inputNome = document.getElementById('nome');
const InputMatricula = document.getElementById('Matricula');
const Telefone = document.getElementById('Telefone');
const Endere_ = document.getElementById('Endereço');

const Bnt_cadastra_aluno = document.getElementById('bnt_cadastrar');
const LimparCampo = document.getElementById('bnt_clear_fild');
const Form_ = document.getElementById('id_form');


function ClearCampo() {
      document.getElementById('id_form').reset();
}

function verifica() {
      if(InputMatricula.value == "") {
            document.getElementById('Matricula').classList.add("ValidaInputError");
      } else {
            document.getElementById('Matricula').classList.remove("ValidaInputError");
            document.getElementById('Matricula').classList.add("ValidaInput");
      }

      if(inputNome.value == "") {
            document.getElementById('nome').classList.add("ValidaInputError");
      } else {
            document.getElementById('nome').classList.remove("ValidaInputError");
            document.getElementById('nome').classList.add("ValidaInput");
      }

      if(Telefone.value == "") {
            document.getElementById('Telefone').classList.add("ValidaInputError");
      } else {
            document.getElementById('Telefone').classList.remove("ValidaInputError");
      }

      if(Endere_.value == "") {
            document.getElementById('Endereço').classList.add("ValidaInputError");
      } else {
            document.getElementById('Endereço').classList.remove("ValidaInputError");
            document.getElementById('Endereço').classList.add("ValidaInput");
      }
}


Bnt_cadastra_aluno.addEventListener('click', function(event) {
      event.preventDefault();
      verifica();

});


