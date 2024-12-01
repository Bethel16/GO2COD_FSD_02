
  interface CategorySectionProps {
    onCategorySelect?: (categoryId: number) => void; // Accepts number
  }
  
  const CategorySection: React.FC<CategorySectionProps> = ({ onCategorySelect }) => {
    const categories = [
      { id: 1, name: "Fruits & Vegetables", img: "img/small/1.jpg" },
      { id: 2, name: "Grocery & Staples", img: "img/small/2.jpg" },
      { id: 3, name: "Beverages", img: "img/small/3.jpg" },
      { id: 4, name: "Home & Kitchen", img: "img/small/4.jpg" },
      // Add more categories as needed
    ];
  
    return (
      <section className="osahan-carousel-two border-top py-4">
        <div className="container-fluid d-flex">
          <div className="category-list-sidebar flex-shrink-0">
            <div className="category-list-sidebar-header">
              <button
                className="btn btn-link badge-success mt-5"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                All Categories <i className="mdi mdi-menu" aria-hidden="true"></i>
              </button>
            </div>
            <div className="collapse show" id="collapseExample">
              <div className="category-list-sidebar-body">
                {categories.map((category) => (
                  <div key={category.id} className="item">
                    <div className="sidebar-category-item">
                      <a
                        href="shop.html"
                        onClick={() => onCategorySelect && onCategorySelect(category.id)} // Pass number (categoryId)
                      >
                        <img className="img-fluid" src={category.img} alt={category.name} />
                        <h6>{category.name}</h6>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="main-content flex-grow-1">
            <div className="carousel-slider-main text-center">
              <div className="owl-carousel owl-carousel-slider rounded overflow-hidden shadow-sm">
                <div className="item">
                  <a href="shop.html">
                    <img className="img-fluid" src="img/ad/2.jpg" alt="First slide" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CategorySection;
  