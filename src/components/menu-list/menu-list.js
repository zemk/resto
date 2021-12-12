import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRouterService from '../hoc';
import {menuLoaded, menuRequsted, addedToCart} from '../../actions'
import './menu-list.scss';
import Spinner from '../spinner';

class MenuList extends Component {
    componentDidMount (){
        this.props.menuRequsted()
        const {RestoService} =this.props;

        RestoService.getMenuItems()
        .then(res=> this.props.menuLoaded(res));
        
    }
    render() {
        const {menuItems, loading, addedToCart} =this.props;
        
       if(loading) {
           return <Spinner/>
       }
        return (
           
            <ul className="menu__list">
                {
                    menuItems.map(menuItem =>{
                        console.log('menuItem')
                        console.log(menuItem)
                        return  (<MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem} 
                                    onAddTocart={()=>addedToCart(menuItem.id)}/>)
                    })
                }
                   
                
                
            </ul>
        )
    }
};

const mapStateToPros =(state) =>{
    return {
        menuItems: state.menu,
        loading : state.loading
    }
}

const mapDisatchToProps ={
    menuLoaded,
    menuRequsted,
    addedToCart
  
    
};

export default  WithRouterService()(connect( mapStateToPros,mapDisatchToProps)(MenuList));