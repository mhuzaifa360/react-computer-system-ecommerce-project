import React from 'react'
import Typography from '../common/Typography'

function ProductsHead() {
  return (
    <div>
      <div className="flex justify-between bg-[#F8F8F8] p-3 rounded-md">
            <div className="flex gap-2">
              {/* SHOW ITEMS NUMBER */}
              <Typography varient="small">items 12 </Typography>
              {/* SORT PRODUCTS BY NAME */}
              <form action="" className="flex gap-2">
                <Typography varient="small">Sort By</Typography>
                <select name="" id="">
                  <option value="">Name</option>
                </select>
              </form>
            </div>
            {/* NUMBER OF ITEMS WILL BE SHOWN */}
            <div className="flex">
              <form action="" className="flex gap-2">
                <Typography varient="small">Show</Typography>
                <select name="" id="">
                  <option value="">12</option>
                </select>
              </form>
            </div>
          </div>
    </div>
  )
}

export default ProductsHead
