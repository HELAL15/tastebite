import CategoryCard from "@/components/ui/CategoryCard";
import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "Tastebite - categories",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
         <section>
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 ">
              <CategoryCard img='pasta.jpeg' title="pasta" />
              <CategoryCard img='pizza.webp' title="pizza" />
              <CategoryCard img='vegan.jpeg' title="vegan" />
              <CategoryCard img='desserts.jpeg' title="desserts" />
              <CategoryCard img='smoothie.jpeg' title="smoothies" />
              <CategoryCard img='breakfast.jpeg' title="breakfast" />
              <CategoryCard img='pasta.jpeg' title="pasta" />
              <CategoryCard img='pizza.webp' title="pizza" />
              <CategoryCard img='vegan.jpeg' title="vegan" />
              <CategoryCard img='desserts.jpeg' title="desserts" />
              <CategoryCard img='smoothie.jpeg' title="smoothies" />
              <CategoryCard img='breakfast.jpeg' title="breakfast" />
              <CategoryCard img='pasta.jpeg' title="pasta" />
              <CategoryCard img='pizza.webp' title="pizza" />
              <CategoryCard img='vegan.jpeg' title="vegan" />
              <CategoryCard img='desserts.jpeg' title="desserts" />
              <CategoryCard img='smoothie.jpeg' title="smoothies" />
              <CategoryCard img='breakfast.jpeg' title="breakfast" />
              <CategoryCard img='pasta.jpeg' title="pasta" />
              <CategoryCard img='pizza.webp' title="pizza" />
              <CategoryCard img='vegan.jpeg' title="vegan" />
              <CategoryCard img='desserts.jpeg' title="desserts" />
              <CategoryCard img='smoothie.jpeg' title="smoothies" />
              <CategoryCard img='breakfast.jpeg' title="breakfast" />
              <CategoryCard img='pasta.jpeg' title="pasta" />
              <CategoryCard img='pizza.webp' title="pizza" />
              <CategoryCard img='vegan.jpeg' title="vegan" />
              <CategoryCard img='desserts.jpeg' title="desserts" />
              <CategoryCard img='smoothie.jpeg' title="smoothies" />
              <CategoryCard img='breakfast.jpeg' title="breakfast" />
            </div>
          </div>
        </section>
    </>
  );
}

export default page;