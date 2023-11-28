import React, { useState } from "react";
import "./App.css";
import { items } from "./components/Items";
import {
  validateEmail,
  validatePassword,
  validateField,
  validatePhone,
  validateCon_pass,
} from "./components/Validate";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/Pages/User/Register";
import Signin from "./components/Pages/User/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Pages/Header/Header";
import Shop from "./components/Pages/Shop/Shop";
import Filter from "./components/Pages/Filter/Filter";
import { category } from "./components/Items";
import Home from "./components/Pages/Home/Home";
import Cart from "./components/Pages/Cart/Cart";
import Payment from "./components/Pages/Payment/Payment";
import Products from "./components/Pages/ProductItems/Products";
import PageNotFount from "./components/Pages/pageNotFound/PageNotFount";
import Search from "./components/Pages/Search/Search";
import Admin from "./components/Admin/Admin";
import Users from "./components/Admin/Users/Users";
import User from "./components/Admin/Users/User";
import Allproducts from "./components/Admin/AllProducts/Allproducts";
import AddProduct from "./components/Admin/AllProducts/AddProduct";
import ProductPage from "./components/Admin/AllProducts/ProductPage";
import AdminLogin from "./components/Admin/AdminLogin";
import ProductsCategory from "./components/Admin/AllProducts/ProductsCategory";
import AddCategory from "./components/Admin/AllProducts/AddCategory";
import OrderStatus from "./components/Pages/OrderStatus/OrderStatus";
import Footer from "./components/Footer/Footer";
export const MyContext = React.createContext();
export const MyContext1 = React.createContext();
export const MyContext2 = React.createContext();
export const MyContext3 = React.createContext();

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState([{id: 1 ,name: "thameem", email: "thameempk292@gmail.com", pass: "123456789", phone : 1234567890 , cart : []}]);
  const [isLoged, setIsLoged] = useState(false);
  const [login, setLogIn] = useState({});
  const [id, setId] = useState(2)
  const handleSubmit = (name, email, pass, con_pass, phone) => {
    setId(prev => prev + 1)
    const acc = user.find(
      (item) => item.email === email && item.phone === phone
    );
    if (!acc) {
      
      if (
        validateField(name) &&
        validateEmail(email) &&
        validatePassword(pass) &&
        validateCon_pass(pass, con_pass) &&
        validatePhone(phone)
      ) {
        const newUser = [
          ...user,
          { id: id, name: name, email: email, pass: pass, phone: phone },
        ];
        setUser(newUser);
        navigate("/signin");
      }
    } else {
      alert("Email or Phone already exist!");
    }
  };


  const log = (email, pass) => {
    const findUser = user.find(
      (list) => list.email === email && list.pass === pass
    );
    if (findUser) {
      setLogIn({
        name: findUser.name,
    email: findUser.email,
    pass: findUser.pass,
    cart: findUser.cart || [], 
      });
      setIsLoged(true);
      setCart(findUser.cart || [])
      if(findUser.cart && findUser.cart.length !== 0){
        setEmpty(true)
      }else{
        setEmpty(false)
      }
      
      navigate("/");
      
    } else {
      alert("Email or Password is incorrect!");
    }
  };


  const logOut = () => {
    const newItem = user.map((user)=> user.email === login.email ? {...user, cart: cart}  : user)
    setUser(newItem)
    setLogIn({});
    setIsLoged(false);
    setCart([])
    setEmpty(false)
  };



  const [item, setItems] = useState(items);
  const [cat, setCategory] = useState(category);


  const cartPlus = (id) => {
    const newItem = item.map((items) =>
      items.id === id ? { ...items, qty: items.qty + 1 } : items
    );
    setItems(newItem);
  };



  const cartMin = (id) => {
    const newItem = item.map((items) =>
      items.id === id && items.qty > 1
        ? { ...items, qty: items.qty - 1 }
        : items
    );
    setItems(newItem);
  };



  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState(false);

  const findUser = user.find((user)=> user.email === login.email)
  const addCart = (id, qty) => {

      if(isLoged){
        setEmpty(true);
      const selectedItem = item.find((items) => items.id === id);
      if (selectedItem) {
        const isItemInCart = cart.some((cartItem) => cartItem.id === id);
        if (isItemInCart) {
          const updatedCart = cart.map((cartItem) =>
            cartItem.id === id
              ? {
                  ...cartItem,
                  qty: cartItem.qty + qty,
                  total: (cartItem.qty + qty) * selectedItem.offer,
                }
              : cartItem
          );
          setCart(updatedCart);
        } else {
          setCart([
            ...cart,
            { ...selectedItem, qty: qty, total: qty * selectedItem.offer },
          ]);
        }
        
      }
      }else{
        navigate('/signin')
      }
      
    
    
  };



  const cartSecPlus = (id) => {
    const newItem = cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1, total: (item.qty + 1) * item.offer }
        : item
    );
    setCart(newItem);
  };



  const cartSecMin = (id) => {
    const newItem = cart.map((item) =>
      item.id === id && item.qty > 0
        ? { ...item, qty: item.qty - 1, total: (item.qty - 1) * item.offer }
        : item
    );
    const filteredData = newItem.filter((item) => item.qty > 0);
    setCart(filteredData);
  };

  let total = 0;
 
  if(findUser && findUser.cart){
     total = cart.reduce((total, item) => item.total + total, 0);
  }
  
  const [order, setOrder] = useState(false);
  const [ordersec, setOrderSec] = useState([{}]);



  const placeOrder = (id) => {
    if(isLoged){
      const newItem = item.find((item) => item.id === id);
      if (newItem) {
        const updated = [{...newItem, total:newItem.qty * newItem.offer}];
        setOrderSec(updated);
        setOrder(true);
        navigate("/payment");
      } else {
        setOrderSec(cart);
        setOrder(true);
        setCart([])
        setEmpty(false)
        navigate("/payment");
      }
    }else{
      navigate('/signin')
    }
   
  };



  const [prd, setPrd] = useState([]);

  const ViewItem = (cat) => {
    const newItem = item.filter((item) => item.category === cat);
    setPrd(newItem);
    navigate("/product");
  };


  const priceItem = (price) => {
    if (price !== "") {
      const newItem = item.filter((item) => item.price <= price);
      setPrd(newItem);
      navigate("/product");
    } else {
      navigate("/shop");
    }
  };


  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const handleSearch = () => {
    const filterItem = item.filter((items) =>
      items.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterItem); 
    navigate("/result");
  };



  const delCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    if (newCart.length === 0) {
      setEmpty(false);
    }
  };


  const orderTotal = ordersec.reduce((total, item)=> item.total + total, 0)

  const orderPlace = (orderdet) =>{
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleString()
    const orderDate = orderdet.map((order)=>( {...order, date:formattedDate}) )
    const newOrder = user.map((user)=> user.email === login.email ? {...user, order : orderDate} : user)
    setUser(newOrder)
    navigate('/orderstatus')
  }

  const deleteItem = (index) =>{
    const data = [...item]
    data.splice(index, 1)
    setItems(data)
}

  const [isAdminLoged, setIsAdminLoged] = useState(false)
  return (
    <div className="App">
      <MyContext3.Provider
        value={{ cart, addCart, placeOrder, order, prd, ordersec }}
      >
        <MyContext2.Provider value={{ item, setItems }}>
          <MyContext1.Provider value={{login, user, setUser}}>
            <MyContext.Provider value={isLoged}>
              <Header
                logout={logOut}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
              <Routes>
                <Route
                  path="/"
                  element={<Home cartPlus={cartPlus} cartMin={cartMin} />}
                >
                  {" "}
                </Route>
                <Route
                  path="/:category"
                  element={<Filter cartPlus={cartPlus} cartMin={cartMin} />}
                />
                <Route
                  path="/register"
                  element={<Register handleSubmit={handleSubmit} />}
                />
                <Route path="/signin" element={<Signin log={log} />} />
                <Route
                  path="/shop"
                  element={
                    <Shop
                      cartPlus={cartPlus}
                      cartMin={cartMin}
                      ViewItem={ViewItem}
                      priceItem={priceItem}
                      cat={cat}
                    />
                  }
                ></Route>
                <Route
                  path="/product"
                  element={<Products cartPlus={cartPlus} cartMin={cartMin} />}
                />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cartSecPlus={cartSecPlus}
                      cartSecMin={cartSecMin}
                      total={total}
                      empty={empty}
                      delCart={delCart}
                      isLoged={isLoged}
                      log={log}
                    />
                  }
                />
                <Route
                  path="/payment"
                  element={
                    <Payment
                      total={total}
                      orderTotal = {orderTotal}
                      cart={cart}
                      isLoged={isLoged}
                      log={log}
                      orderPlace={orderPlace}
                    />
                  }
                />
                <Route
                  path="/result"
                  element={<Search searchResult={searchResult} />}
                />
                <Route path="/orderstatus" element={<OrderStatus user={user} login={login} log={log}/>} />
                <Route path="/admin" element={<Admin user ={user} isAdminLoged={isAdminLoged} setIsAdminLoged={setIsAdminLoged} cat={cat} deleteItem={deleteItem}/>} /> 
                <Route path="/admin/users" element={<Users user = {user} setUser ={setUser} isAdminLoged={isAdminLoged} /> } />
                <Route path="/admin/users/:userid" element={<User user ={user} isAdminLoged={isAdminLoged} deleteItem={deleteItem} setUser ={setUser}/>} />
                <Route path="/admin/allproducts" element={<Allproducts setItems={setItems} isAdminLoged={isAdminLoged} cat={cat} deleteItem={deleteItem}/>} />
                <Route path="/admin/allproducts/category/:category" element={<ProductsCategory cat={cat} deleteItem={deleteItem} isAdminLoged={isAdminLoged}/>} />
                <Route path="/admin/allproducts/addproduct" element={<AddProduct setItems={setItems} isAdminLoged={isAdminLoged} />} />
                <Route path="/admin/allproducts/addcategory" element={<AddCategory cat={cat} setCategory={setCategory}/>} />
                <Route path="/admin/allproducts/:productid" element={<ProductPage isAdminLoged={isAdminLoged} />} />
                
                <Route path="/admin/login" element={<AdminLogin setIsAdminLoged={setIsAdminLoged} isAdminLoged = {isAdminLoged} user ={user}/>} />

                <Route path="*" element={<PageNotFount />} />
              </Routes>
              <Footer />
            </MyContext.Provider>
          </MyContext1.Provider>
        </MyContext2.Provider>
      </MyContext3.Provider>
    </div>
  );
}

export default App;
