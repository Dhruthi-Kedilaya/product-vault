import React,{useState} from "react";
import { useProductStore } from "../store/product";
import { useToast } from '@chakra-ui/react'

const CreatePage = () => {
  const toast = useToast()
  const [newProduct,setNewProduct]=useState({
    name:"",
    price:"",
    image:""
  });

  const {createProduct}=useProductStore();//destructuring right away

  const changeHandler=(event)=>{
    setNewProduct({...newProduct,[event.target.name]: event.target.value});
  }

   const [darkMode, setDarkMode] = useState(
    document.body.style.backgroundColor === "#1a1a1a"
  );

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const {success,message,result}=await createProduct(newProduct);
    console.log(success);
    console.log(message);
    console.log(result);
    if(success==false){
      toast({
        title:"Error",
        description:message,
        status:"error",
        isClosable:"true",
      });
    }else{
      toast({
        title:"Success",
        description:message,
        status:"success",
        isClosable:"true",
      });
    }
  }

  const cardStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "white",
    color: darkMode ? "white" : "black",
    border: "1px solid",
    borderColor: darkMode ? "#444" : "#ccc",
    borderRadius: "10px",
  };

  const inputStyle = {
    backgroundColor: darkMode ? "#444" : "white",
    color: darkMode ? "white" : "black",
    borderColor: darkMode ? "#666" : "#ccc",
  };

  const buttonStyle={
  }

  return (
    <div className="container">
      <div className="card shadow p-4" style={cardStyle}>
        <form>
          <h2 className="text-center mb-4" style={{fontWeight:"bolder",fontSize:"45px"}}>Create A New Product</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              <h5>Name</h5>
            </label>
            <input
              style={inputStyle}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={changeHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              <h5>Price</h5>
            </label>
            <input
              style={inputStyle}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={changeHandler}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              <h5>Image</h5>
            </label>
            <input
              style={inputStyle}
              type="text"
              class="form-control"
              id="exampleInputimage"
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3" onClick={handleSubmit} style={buttonStyle}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
