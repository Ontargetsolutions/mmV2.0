import React from "react";
import { CircularProgress } from "@material-ui/core";
import { RctCard, RctCardContent } from "../../../../components/RctCard/index";

const AdobeImage = ({ images, loading, pickImage, imageSelected }) => {
  if (loading) {
    return <CircularProgress color="secondary"></CircularProgress>;
  }
  console.log(`images pasadas por porps al adobeImage component, ${loading}, ${imageSelected} `);
  return (
    <div className="row">
      {images.map((image, key) => (
        <div className="col-sm-6 col-md-4 col-xl-3" key={key}>
          <RctCard>
            <RctCardContent>
              <div
                className={
                    imageSelected === image.thumbnail_url
                    ? "product-image mb-20 imageSelected"
                    : "product-image mb-20"
                }
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    pickImage(image.thumbnail_url);
                  }}
                >
                  <img
                    src={image.thumbnail_url}
                    alt="image"
                    className="img-fluid"
                    width="300"
                    height="300"
                  />
                </a>
              </div>
            </RctCardContent>
          </RctCard>
        </div>
      ))}
    </div>
  );
};

export default AdobeImage;
