const inputNome = document.getElementById('nome');
const InputMatricula = document.getElementById('Matricula');
const Telefone = document.getElementById('Telefone');
const Endere_ = document.getElementById('Endereço');

const Bnt_cadastra_aluno = document.getElementById('bnt_cadastrar');
const LimparCampo = document.getElementById('bnt_clear_fild');
const Form_ = document.querySelector('form');

let nome = document.getElementById('Nome_info');
let Matricula = document.getElementById('Matricula_info');
let fone = document.getElementById('Telefone_info');
let Endere = document.getElementById('Endereço_info');


      // algoritmos simples, só para teste
Bnt_cadastra_aluno.addEventListener('click', function(e) {
      e.preventDefault();
      let cont_verifica = 0;

      if(InputMatricula.value == "") {
            document.getElementById('Matricula').classList.add('ValidaInputError');
      } else {
            document.getElementById('Matricula').classList.remove('ValidaInputError');
            document.getElementById('Matricula').classList.add('ValidaInput');
            cont_verifica++;
      }


      if(inputNome.value == "") {
            document.getElementById('nome').classList.add('ValidaInputError');
      } else {
            document.getElementById('nome').classList.remove('ValidaInputError');
            document.getElementById('nome').classList.add('ValidaInput');
            cont_verifica++;
      }

      if(Telefone.value == "") {
            document.getElementById('Telefone').classList.add('ValidaInputError');
      } else {
            document.getElementById('Telefone').classList.remove('ValidaInputError');
            document.getElementById('Telefone').classList.add('ValidaInput');
            cont_verifica++;
      }

      if(Endere_.value == "") {
            document.getElementById('Endereço').classList.add('ValidaInputError');
      } else {
            document.getElementById('Endereço').classList.remove('ValidaInputError');
            document.getElementById('Endereço').classList.add('ValidaInput');
            cont_verifica++;
      }

      if(cont_verifica == 4) {
            alert('Tudo ok');
            document.getElementById('Nome_info').innerHTML = 'Nome:' + ' ' + inputNome.value;
            document.getElementById('Matricula_info').innerHTML = 'Matricula:' + ' ' + InputMatricula.value;
            document.getElementById('Telefone_info').innerHTML = 'Telefone(responsável)::' + ' ' + Telefone.value;
            document.getElementById('Endereço_info').innerHTML = 'Endereço::' + ' ' + Endere_.value;
      }
});
