import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";

const ProductCard = ({product}) => {
  const toast = useToast();
  const [updatedProduct,setUpdatedProduct]=useState(product);
     
  const handleChange=(event)=>{
    setUpdatedProduct({...updatedProduct,[event.target.name]:event.target.value});
  }
  const {updateProduct}=useProductStore();
  const handleClick=async(pid,updatedProduct)=>{
    const {success,message}=await updateProduct(pid,updatedProduct);
    console.log(message);
  }

  const { deleteProduct, products } = useProductStore();
  const handleDelete = async (id) => {
    const { success, message } = await deleteProduct(id);
    console.log(success);
    console.log(message);
    if (success == false) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: "true",
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: "true",
      });
    }
  };
  return (
    <div class="card flex-container" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={product.image}
        class="card-img-top"
        alt={product.name}
        style={{ height: "200px" }}
      />
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">₹ {product.price}</p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal-${product._id}`}
        >
          <i class="bi bi-pencil-square"></i>
        </button>

        <div
          class="modal fade"
          id={`exampleModal-${product._id}`}
          tabindex="-1"
          aria-labelledby={`exampleModalLabel-${product._id}`}
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id={`exampleModal-${product._id}`}>
                  Update Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                <input class="form-control" type="text" name="name" style={{marginBottom:"10px"}} value={updatedProduct.name} onChange={handleChange}/>
                <input class="form-control" type="number" name="price" style={{marginBottom:"10px"}} value={updatedProduct.price} onChange={handleChange}></input>
                <input class="form-control" type="text" name="image" value={updatedProduct.image} onChange={handleChange}></input>
                </form>
                </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" onClick={()=>handleClick(product._id,updatedProduct)}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          onClick={() => handleDelete(product._id)}
          class="btn btn-primary"
          style={{ margin: "5px", backgroundColor:"red", borderColor:"red"}}
        >
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
