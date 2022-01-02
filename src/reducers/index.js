const initialState ={
  menu: [],
  loading: true,
  items: [],
  total: 0
}

const reduscer =(state=initialState, action) =>{
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true
      };
    case  'ITEM_ADD_TO_CART': 
       
       const id = action.payload;
       const item = state.menu.find(item=> item.id ===id);
       const cot = state.items.find(items=> items.id ===item.id);

  
      const newItem={
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          cont: 1

          
       };
       if (cot) {
         console.log('повтярашь товари в меню')

          cot.cont ++
         console.log(cot);
        state.total += item.price 
         return {
          ...state,
          items:[
            ...state.items.slice(0, cot),
            ...state.items.slice(cot+1)
          ]
        }
       }


       
       console.log(state.items)
       state.total += item.price 
  
       return {
         ...state,
        
         items: [
           ...state.items,
           newItem
         ]
       }
    case 'ITEM_REMOVE_FROM_CART':
        const idx =action.payload;

        const itemIndex = state.items.findIndex(item=> item.id ===idx);
         const menuItem = state.items.find(item=> item.id ===idx);
        console.log(itemIndex )
        console.log(state.items[itemIndex].price)
        
        if (menuItem.cont> 1) {
          menuItem.cont--;
          state.total -=state.items[itemIndex].price
            return {
            ...state,
            items:[
              ...state.items.slice(0, menuItem),
              ...state.items.slice(menuItem+1)
            ]
          }
        }
        state.total -=state.items[itemIndex].price
        return {
          ...state,
          items:[
            ...state.items.slice(0, itemIndex),
            ...state.items.slice(itemIndex+1)
          ]
        }
    default:
      return state;
  }
}
export default reduscer;