import React from "react";

const App = () => {
  return (
    <div className="bg-blue-200 h-screen">
      <div className="front-cover flex h-screen">
        <div className="w-1/2 flex bg-rand-front-cover bg-cover justify-center items-center">
          <div className="flex-col justify-center items-center">
            <div>
              <a href="#">
                <img
                  className="w-56 shadow-xl rounded-full border-2 border-white"
                  src="https://placebeard.it/512x512"
                  alt="t0nylombardi"
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a href="#" className="font-semibold block hover:text-white mt-2">
                t0nylombardi
              </a>
              <div className="text-gray-500 mt-2">t0nylombardi.com blog</div>
            </div>
            <hr className="py-2" />
            <div className="flex flex-row justify-center items-center mt-4 -mx-4">
              <div className="w-1/4 mx-4">
                <button className="bg-transparent hover:bg-gray-100 text-white font-semibold border border-white shadow py-2 px-4 rounded-full">
                  blog
                </button>
              </div>
              <button className="bg-transparent hover:bg-gray-100 text-white font-semibold border border-white shadow py-2 px-4 rounded-full">
                blog
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-white font-semibold border border-white shadow py-2 px-4 rounded-full">
                blog
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-white font-semibold border border-white shadow py-2 px-4 rounded-full">
                blog
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          tenetur, error culpa vitae praesentium esse possimus nihil, nobis
          temporibus officia inventore ab officiis aliquid reprehenderit
          delectus earum? Architecto dolorem expedita voluptas, error rem
          accusantium veniam culpa ipsa dolore distinctio nihil illo quae
          ducimus itaque, vero eveniet ad doloremque quam aut enim, officiis
          sit! Eveniet facere eius iste repellat quod, beatae numquam cumque
          deserunt quam exercitationem earum tenetur repellendus totam ratione
          neque ea aspernatur unde repudiandae soluta tempora ab possimus? Id
          ipsum architecto magni necessitatibus distinctio hic obcaecati dolores
          quia eligendi aut ea sed labore rerum laboriosam, voluptate deserunt
          cum sapiente libero ipsa veniam impedit maxime velit! Dignissimos
          quaerat fugiat commodi, blanditiis, numquam modi illo animi
          accusantium maxime saepe voluptate earum molestias ut eligendi culpa
          repudiandae, suscipit similique exercitationem ea ipsa. Odit vitae
          provident porro ea tenetur, sunt officia, dolores eos enim
          exercitationem soluta sit tempora fuga doloremque obcaecati voluptate
          distinctio aspernatur cumque! Soluta nulla velit laborum possimus
          officia dolorem vitae veritatis iste excepturi, eaque maiores
          architecto aliquid dolore sequi quidem expedita molestiae magni natus
          delectus. Nihil ipsam sapiente fugit autem perferendis ducimus
          accusantium, adipisci vitae, optio deleniti illum eligendi iure aut
          reiciendis temporibus rem itaque dolorum odio necessitatibus qui
          maxime. Eligendi excepturi aliquam ut impedit ratione, placeat quas
          porro esse cupiditate facere dignissimos dolore, inventore dolorem ad
          ea rem harum tempora illum eum nemo beatae id. Hic labore temporibus
          quod, a ad, accusamus impedit dolor rem quo commodi porro, ut
          provident fugit itaque veniam minima doloremque sint ab culpa
          voluptates.
        </div>
      </div>
    </div>
  );
};

export { App };
