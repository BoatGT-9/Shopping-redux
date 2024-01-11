import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/product/action'
const AddProduct = () => {
    // const dispatch = useDispatch();
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm()
    //   const onSubmit = (data) => {
    //     dispatch(addProduct(data));
    //     reset()
    //   }

      const  dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(addProduct(data))
        reset()
    }
  return (
    <div className='formContainer bg-base-100 shadow-sm'>
    <h1 className="formTitle">
        Add new product
    </h1>
        <form  className="space-y-4 text-[#000]" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <label >Product Name</label>
                <input type="text"className='addProductInput' 
                {...register("name", { required: true })}/>
                {errors.name && <span>Please enter a name </span>}
            </div>
            <div className="space-y-2">
                <label >Category</label>
                <select  className="addProductInput"{...register("Category", { required: true })}>
                    <option value="">Select a category</option>
                    <option value="clothing">Clothing</option>
                    <option value="gadgets">Gadgets </option>
                    <option value="bags">Bags</option>
                </select>
                {errors.Category && <span>Please enter a Category</span>}
            </div>
            <div className="space-y-2">
                <label >Image URL</label>
                <input type="text" className="addProductInput" 
                {...register("ImageURL", { required: true })}/>
                {errors.ImageURL && <span >Please enter a ImageURL</span>}
            </div>
            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label >Price</label>
                    <input type="number" className='addProductInput'
                    {...register("price", { required: true, min:0 })} />
                    {errors.Price && <span >Please enter a valid Price</span>}
                </div>
                <div className="space-y-2">
                <label >Quantity</label>
                    <input type="number" className='addProductInput' id='lws-inputQuantity' 
                    {...register("Quantity", { required: true, min:0 })}/>
                    {errors.Quantity && <span >Please enter a valid Quantity</span>}
                </div>
            </div>
            <button type='submit' className='submit bg-indigo-600 text-white'>
                Add Product
            </button>
        </form>
        </div>
  )
}

export default AddProduct
