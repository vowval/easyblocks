const ArticleCard = (product: any) => {
  console.log("productReferences ^^^^^^^^^^^^^^^^^^^^^^^^^^^^", product);
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.price}</p>
    </div>
  );
};

export { ArticleCard };
