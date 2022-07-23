import { PageHeader, Button , Input, Space, Badge} from 'antd';
import { useMoralis } from "react-moralis";
import {Link} from 'react-router-dom';
import './Header.css'
import Amazon from "../images/logo.png";
import BookStore from "../images/bookstore.png";
import USA from "../images/usa.png";
import {MenuOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import { CaretDownFilled} from '@ant-design/icons';

// search bar
const {Search} = Input;

// book categories
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

// header
const Header = () => {
  const { authenticate, account } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <img src = {Amazon} className = "logo"></img>
          <img src = {BookStore} className = "logo"></img>
          <Search
            placeholder='Find a Product'
            enterButton
            className='searchBar'
          />
         <Button 
         className='login'
         key="1" 
         type="primary" 
         onClick={() => authenticate()}>
          {account ? <span>{account.slice(0,7)}...</span> : <span>Login</span>}
          </Button>
          <Space size = "large">

            <Space className='header-buttons' size = {'small'}>
              <img src = {USA} alt = "region" className='flag'></img><CaretDownFilled />
            </Space>
            <Badge count = {0} showZero>
              <span className='header-buttons'>
                <ShoppingCartOutlined className = 'header-icon' />
              </span>
            </Badge>

          </Space>
          </>
        ]}>
      </PageHeader>

      <div className='site-page-subheader-ghost-wrapper'>
      <Space size = {'middle'}>
        <Space size = {'small'} style = {{fontWeight: 'bold'}}>
          <MenuOutlined/>
          Categories
          </Space>
          {categories.map((i) => {
            return (
              <Link to = "/categories" state = {i} className = "categories">{i}</Link>
            )
          })}
        </Space>
      </div>

    </div>
  )
}

export default Header;