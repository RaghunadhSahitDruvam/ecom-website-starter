import Product from "../models/product.model";
import { connectToDatabase } from "../connect";
import Category from "../models/category.model";
import SubCategory from "../models/subCategory.model";
import { filterArray, removeDuplicates } from "@/lib/utils";

export const GetDataforShopPage = async (
  searchQuery?: any,
  categoryQuery?: any,
  subCategoryQuery?: any,
  brandQuery?: any,
  styleQuery?: any,
  styleRegex?: any,
  sizeQuery?: any,
  sizeRegex?: any,
  colorQuery?: any,
  colorRegex?: any,
  brandRegex?: any,
  patternQuery?: any,
  patternRegex?: any,
  genderQuery?: any,
  genderRegex?: any,
  materialQuery?: any,
  materialRegex?: any,
  priceQuery?: any,
  shippingQuery?: any,
  ratingQuery?: any,
  sortQuery?: any,
  productsPerPage?: any,
  page?: any
) => {
  const styleSearchRegex = createRegex(styleQuery, styleRegex);
  const sizeSearchRegex = createRegex(sizeQuery, sizeRegex);
  const colorSearchRegex = createColorRegex(colorQuery, colorRegex);
  const brandSearchRegex = createRegex(brandQuery, brandRegex);
  const patternSearchRegex = createRegex(patternQuery, patternRegex);
  const materialSearchRegex = createRegex(materialQuery, materialRegex);
  const genderSearchRegex = createRegex(genderQuery, genderRegex);

  const search =
    searchQuery && searchQuery !== ""
      ? {
          name: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};
  const category =
    categoryQuery && categoryQuery !== "" ? { category: categoryQuery } : {};
  const subCategory =
    subCategoryQuery && subCategoryQuery !== ""
      ? { subCategories: subCategoryQuery }
      : {};
  const style =
    styleQuery && styleQuery !== ""
      ? {
          "details.value": {
            $regex: styleSearchRegex,
            $options: "i",
          },
        }
      : {};
  const size =
    sizeQuery && sizeQuery !== ""
      ? {
          "subProducts.sizes.size": {
            $regex: sizeSearchRegex,
            $options: "i",
          },
        }
      : {};
  const color =
    colorQuery && colorQuery !== ""
      ? {
          "subProducts.color.color": {
            $regex: colorSearchRegex,
            $options: "i",
          },
        }
      : {};
  const brand =
    brandQuery && brandQuery !== ""
      ? {
          brand: {
            $regex: brandSearchRegex,
            $options: "i",
          },
        }
      : {};
  const pattern =
    patternQuery && patternQuery !== ""
      ? {
          "details.value": {
            $regex: patternSearchRegex,
            $options: "i",
          },
        }
      : {};
  const material =
    materialQuery && materialQuery !== ""
      ? {
          "details.value": {
            $regex: materialSearchRegex,
            $options: "i",
          },
        }
      : {};
  const gender =
    genderQuery && genderQuery !== ""
      ? {
          "details.value": {
            $regex: genderSearchRegex,
            $options: "i",
          },
        }
      : {};
  const price =
    priceQuery && priceQuery !== ""
      ? {
          "subProducts.sizes.price": {
            $gte: Number(priceQuery[0]) || 0,
            $lte: Number(priceQuery[1]) || Infinity,
          },
        }
      : {};
  const shipping =
    shippingQuery && shippingQuery == "0"
      ? {
          shipping: 0,
        }
      : {};
  const rating =
    ratingQuery && ratingQuery !== ""
      ? {
          rating: {
            $gte: Number(ratingQuery),
          },
        }
      : {};
  const sort: any =
    sortQuery == ""
      ? {}
      : sortQuery == "popular"
      ? { rating: -1, "subProducts.sold": -1 }
      : sortQuery == "newest"
      ? { createdAt: -1 }
      : sortQuery == "topSelling"
      ? { "subProducts.sold": -1 }
      : sortQuery == "topReviewed"
      ? { rating: -1 }
      : sortQuery == "priceHighToLow"
      ? { "subProducts.sizes.price": -1 }
      : sortQuery == "priceLowToHigh"
      ? { "subProducts.sizes.price": 1 }
      : {};

  function createColorRegex(data: any, styleRegex: any) {
    if (data.length > 1) {
      for (var i = 1; i < data.length; i++) {
        styleRegex += `|^#${data[i]}`;
      }
    }
    return styleRegex;
  }

  function createRegex(data: any, styleRegex: any) {
    if (data.length > 1) {
      for (var i = 1; i < data.length; i++) {
        styleRegex += `|^${data[i]}`;
      }
    }
    return styleRegex;
  }

  await connectToDatabase();

  let productsDb = await Product.find({
    ...search,
    ...category,
    ...subCategory,
    ...brand,
    ...style,
    ...size,
    ...color,
    ...pattern,
    ...gender,
    ...material,
    ...price,
    ...shipping,
    ...rating,
  })
    .skip(productsPerPage * (page - 1))
    .limit(productsPerPage)
    .sort(sort)
    .lean();

  let products = productsDb;
  let categories = await Category.find().lean();
  let subCategories = await SubCategory.find()
    .populate({
      path: "parent",
      model: Category,
    })
    .lean();
  let colors = await Product.find({ ...category }).distinct(
    "subProducts.color.color"
  );
  let brandsDB = await Product.find({ ...category }).distinct("brand");
  let sizes = await Product.find({ ...category }).distinct(
    "subProducts.sizes.size"
  );
  let details = await Product.find({ ...category }).distinct("details");
  let stylesDb = filterArray(details, "Style");
  let patternsDb = filterArray(details, "Pattern Type");
  let materialsDb = filterArray(details, "Material");

  const styles: any = removeDuplicates(stylesDb);
  const patterns = removeDuplicates(patternsDb);
  const materials = removeDuplicates(materialsDb);
  const brands = removeDuplicates(brandsDB);

  let totalProducts = await Product.countDocuments({
    ...search,
    ...category,
    ...subCategory,
    ...brand,
    ...style,
    ...size,
    ...color,
    ...pattern,
    ...gender,
    ...material,
    ...price,
    ...shipping,
    ...rating,
  });

  return {
    categories: JSON.parse(JSON.stringify(categories)),
    products: JSON.parse(JSON.stringify(products)),
    subCategories: JSON.parse(JSON.stringify(subCategories)),
    sizes: JSON.parse(JSON.stringify(sizes)),
    colors: JSON.parse(JSON.stringify(colors)),
    brands: JSON.parse(JSON.stringify(brands)),
    styles: JSON.parse(JSON.stringify(styles)),
    patterns: JSON.parse(JSON.stringify(patterns)),
    materials: JSON.parse(JSON.stringify(materials)),
    paginationCount: Math.ceil(totalProducts / productsPerPage),
  };
};
