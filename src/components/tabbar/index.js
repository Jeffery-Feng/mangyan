import React,{ Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
class TabBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:[
                {
                    id: 1,
                    iconName: 'fa-home',
                    path: '/home',
                    text: '首页'
                  },
                  {
                    id: 2,
                    iconName: 'fa-hand-peace',
                    path: '/recommend',
                    text: '推荐'
                  },
                  {
                    id: 5,
                    iconName: 'fa-user-secret',
                    path: '/mine',
                    text: '我的'
                  }
            ]
        }
    }

    titleList = ()=>{
        return this.state.title.map(item =>( 
            <li key = { item.id }>
                <NavLink 
                to = { item.path }
                >
                    <i className = {'fas '+ item.iconName }></i>
                    <span>{ item.text }</span>
                </NavLink>
            </li>))
        }

    render() {
        
        return(
            <div className = "tabbar-box">
                <ul>
                    { this.titleList() }
                </ul>
            </div>
        )
    }
}

export default TabBar