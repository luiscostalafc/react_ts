import React from 'react';
import {FiChevronRight} from  'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
   return (
     <>
     <img src={logoImg} alt="Github Explore" />
     <Title>Explore repositórios no Github</Title>
     <Form>
     <input placeholder="Digite o nome de repositório"/>
     <button type="submit">Pesquisar</button>
     </Form>

     <Repositories>
       <a href="teste">
         <img
         src="https://avatars3.githubusercontent.com/u/46203983?s=460&u=0d2997e7bab81617e224941bcfc0aff94d10436f&v=4"
         alt="Luis Costa"
         />
         <div>
           <strong>rocketseat/unform</strong>
           <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
         </div>

         <FiChevronRight size={20}/>

       </a>
       <a href="teste">
         <img
         src="https://avatars3.githubusercontent.com/u/46203983?s=460&u=0d2997e7bab81617e224941bcfc0aff94d10436f&v=4"
         alt="Luis Costa"
         />
         <div>
           <strong>rocketseat/unform</strong>
           <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
         </div>

         <FiChevronRight size={20}/>

       </a>
       <a href="teste">
         <img
         src="https://avatars3.githubusercontent.com/u/46203983?s=460&u=0d2997e7bab81617e224941bcfc0aff94d10436f&v=4"
         alt="Luis Costa"
         />
         <div>
           <strong>rocketseat/unform</strong>
           <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
         </div>

         <FiChevronRight size={20}/>

       </a>
     </Repositories>
     </>
   )
}

export default Dashboard;
