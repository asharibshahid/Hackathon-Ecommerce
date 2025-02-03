import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
    
    *[_type == "wallet"]{ 
       _id,
        name,
        size,
        slug,
        description,
        price,
           "imageUrl": image.asset->url,
        
        }
        
         
            `);
export const Tshirt = defineQuery(`
    
       *[_type == "tshirt"]{ 
            
        name,
        slug,
        description,
        price,
        size,
      "imageUrl": image.asset->url,

        }
                `);
export const Hoddies = defineQuery(`
    
          *[_type == "hoodie"]{
            
            name,
            slug,
            description,
            price,
          "imageUrl": image.asset->url,
            sizes,
            }
                     `);

export const Perfumes = defineQuery(`
    
               *[_type == "perfume"]{
              
            name,
            slug,
            description,
            price,
            brand,
          "imageUrl": image.asset->url,
            }
                           `);

export const Caps = defineQuery(`
    
                *[_type == "cap"]{
          
        name,
        slug,
        description,
        price,
       "imageUrl": image.asset->url,
        
}
                                `);

                                export const jewelry = defineQuery(`
    
                                  *[_type == "jewelry"]{
                            id,
                          name,
                          slug,
                          description,
                          price,
                         "imageUrl": image.asset->url,
                         unique,
                          
                  }   
                                                  
                                                  `);
                                                  export const hijab = defineQuery(`
    
                                                    *[_type == "hijab"]{
                                              id,
                                            name,
                                            slug,
                                            description,
                                            price,
                                           "imageUrl": image.asset->url,
                                           unique,
                                            
                                    }   
                                                                    
                                                                    `);
                                                                    export const electronic = defineQuery(`
    
                                                                      *[_type == "electronic"]{
                                                                id,
                                                              name,
                                                              slug,
                                                              description,
                                                              price,
                                                             "imageUrl": image.asset->url,
                                                             unique,
                                                              
                                                      }   
                                                                                      
                                                                                      `);
                                                                                      export const shoe = defineQuery(`
    
                                                                                        *[_type == "shoes"]{
                                                                                  id,
                                                                                name,
                                                                                slug,
                                                                                description,
                                                                                price,
                                                                               "imageUrl": image.asset->url,
                                                                               unique,
                                                                                
                                                                        }   
                                                                                                        
                                                                                                        `);
                                                                                    
                             
