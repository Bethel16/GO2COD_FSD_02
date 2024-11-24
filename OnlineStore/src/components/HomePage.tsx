import React, { Component } from 'react'
import CategorySection from './CategorySection';
import ProductItemsSlider from './ProductItemsSliders';

export class HomePage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            {/* Category Section on the left */}
            <div className="col-md-4">
              <CategorySection />
            </div>
  
            {/* Main content (Product List or Slider) on the right */}
            <div className="col-md-">
              <ProductItemsSlider /> {/* Using ProductItemsSlider */}
              
              {/* Product List */}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage