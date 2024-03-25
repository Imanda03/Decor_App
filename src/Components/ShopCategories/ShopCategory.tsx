import React, { useEffect, useState } from 'react'
import ShopCategoryItem from '../ShopCategoryItem/ShopCategoryItem';
import axios from 'axios';
import { Box, Button, Typography, Slider, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { ShopCategoryStyle } from './ShopCategoryStyle';
import { Search } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material';
import { Link } from 'react-router-dom';
import { singleProduct } from '../../interface';
import { useParams } from 'react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';

const ShopCategory = () => {

  const [categories, setCategories] = useState<string[]>([]);

  const classes = ShopCategoryStyle();

  const getCategory = () => {
    axios.get(`https://dummyjson.com/products/categories`)
      .then(resp => {
        setCategories(resp.data)
          // console.log(categories);
          ;
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getCategory();
  }, []);


  const desiredCategories = ["furniture", "skincare", "fragrances", "lighting", "home-decoration"];
  const filtercategory = categories.filter(cat => desiredCategories.includes(cat.toLowerCase()));

  const [company, setCompany] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value);
  };

  const {categoryname}=useParams();
  
  const[data,setData]=useState<singleProduct[]>([]);

  const getProductList=()=>{
    axios.get(`https://dummyjson.com/products/category/${categoryname}`)
    .then(resp=>{setData(resp.data.products)
    console.log(resp.data.products);
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getProductList();
  },[categoryname]);

  return (
    <div>
      <Box className={classes.box}>
        <Box className={classes.left}>
          <input type='text' placeholder='Search' />
          <Box className={classes.section}>
          <Typography variant="subtitle1" gutterBottom>
            Category
          </Typography>
          {filtercategory.map((item, index) => (
            <Box key={index}>
            <ShopCategoryItem item={item}/>
            </Box>
          ))}
          </Box>
            <Box className={classes.section}>
            <Typography variant="subtitle1" gutterBottom>
              Company
            </Typography>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Company</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={company}
                label="Company"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Angel">Angel</MenuItem> {/* Define value directly */}
                <MenuItem value="Bigbang">Bigbang</MenuItem> {/* Define value directly */}
                <MenuItem value="Chanel">Chanel</MenuItem> {/* Define value directly */}
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.section}>
            <Typography variant="subtitle1" gutterBottom>
              Colors
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              All
            </Typography>

          </Box>

          <Box className={classes.section}>
            <Typography variant="subtitle1" gutterBottom>
              Price
            </Typography>
            <Box sx={{ width: 100 }}>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
          </Box>

          <Button variant='contained'>Clear Filters</Button>
        </Box>
      </Box>



    </div>
  )
}

export default ShopCategory;