import React, { Component } from 'react';
import ViewComponent from './components/ViewComponent/ViewComponent.js'
import iphone from './img/iphone.png'
import sony from './img/sony.png'
import htc from './img/htc.png'
import galaxy from './img/galaxy.png'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      productList:[
        {
          name:' Apple iPhone Xs Max 512GB / MT572',
          img:iphone,
          price:'4199,00',
          isThere:true,
          description:'С Face ID можно совершенно по‑новому разблокировать устройство, заходить в приложения и оплачивать покупки. самые мощные технологии — камера TrueDepth, модуль Secure Enclave и система Neural Engine — делают эти процессы максимально надёжными и безопасными. А теперь         Face ID ещё быстрее и удобнее. Face ID использует технологии машинного обучения, чтобы различать изменения в вашей внешности. Поэтому iPhone узнает вас и в шляпе, и в очках — даже солнцезащитных'
        },
        {
          name:'Sony Xperia XZ2 Premium / H8166RU',
          img:sony,
          price:'2 463,29',
          isThere:false,
          description:'Производитель: Сони Корпорейшн, 1-7-1 Конан Минато-ку Токио, 108-0075 Япония / Sony Corporation 1-7-1 Konan Minato-ku Tokyo, 108-0075 JapanИмпортер в РБ: ООО "Триовист", 220020, г. Минск, ПОБЕДИТЕЛЕЙ пр., дом № 100, офис 203, ООО "Нереида", 220073, г. Минск, ул. ОЛЬШЕВСКОГО Н.М., дом № 10, корпус А, помещение 7'
        },
        {
          name:'Samsung Galaxy Note 9 Dual 128Gb / N960F',
          img:galaxy,
          price:'2339,00',
          isThere:true,
          description:'Производитель: Самсунг Электроникс, Самсунг-ро, Енгтонг-гу, г. Сувон, Кёнги-до, 16677, Республика Корея / Samsung Electronics Co., Ltd., Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, 16677, Republic of Korea'
        },
        {
          name:' HTC U12+ 6Gb/64Gb',
          img:htc,
          price:'1199,00',
          isThere:false,
          description:'Производитель: Хай Теч Компьютер Корпорейшн, 1Ф, № 6-3, Баоквианг, Ксиндиан, Тайпей 231, Р.О.С., Тайвань / High Tech Computer Corporation, 1F, No. 6-3, Baoqiang Rd., Xindian City, Taipei Country 231, R.O.C., Тайвань'
        }
      ],
      filtered:[]
    }
  }
  componentDidMount(){
    const { productList } = this.state;
    this.setState({
      filtered:productList
    })
  }
  filteredList = (e) =>{
    const { productList } = this.state;
    let filteredList = productList.filter((item) =>{
      return item.name.toLowerCase().search(e.target.value.toLowerCase())!== -1;
    });
    this.setState({
      filtered: filteredList
    });
}
  render() {
    const { 
      filtered 
    } = this.state;

    return (
      <div className='App-Block'>
        <h2>Search
          <p>
            <input 
              type='text'
              className='Search-Element'
              onChange = {(e) =>{this.filteredList(e)}}
            />
          </p>
        </h2>
        {
          filtered.map((elem,idx) =>{
            return(
              <ViewComponent
                key={idx} 
                name={elem.name}
                img={elem.img}
                price={elem.price}
                isThere={elem.isThere}
                description={elem.description}
              />
            )   
          })
        }
        
      </div>
    );
  }
}

export default App;
