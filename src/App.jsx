import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from './components/Produto'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Titulo />
      <div>
        <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
      </div>
      <div>
        <Aluno nome="Carlos" turma="DS" />
        <Aluno nome="Ana" turma="DS" />
        <Aluno nome="Pedro" turma="DS" />
      </div>
      <div>
        <Nota disciplina="React" nota={8.5} />
        <Nota disciplina="React" nota={9.6} />
        <Nota disciplina="React" nota={6.7} />
      </div>
      <div>
        <Produto
          nome="Teclado Mecânico"
          descricao="Teclado com iluminação RGB"
          preco={250}
          disponivel={false}
          />
          <Produto
          nome="Celular smartphone"
          descricao="Celular smarthphone semi-novo"
          preco={6767}
          disponivel={true}
          />
          <Produto
          nome="Monitor 4k"
          descricao="Monitor 4k LG"
          preco={2499}
          disponivel={false}
          />
          <Produto
          nome="sacola plastica"
          descricao="Sacola plastica não reutilizavel"
          preco={0.67}
          disponivel={true}
          />
      </div>
    </div>
  )
}

export default App
