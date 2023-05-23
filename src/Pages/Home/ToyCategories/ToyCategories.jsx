import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MathCategoryToys from "../MathCategoryToys/MathCategoryToys";
import LanguageCategoryToys from "../LanguageCategoryToys/LanguageCategoryToys";
import EngineeringCategoryToys from "../EngineeringCategoryToys/EngineeringCategoryToys";
import ScienceCategoryToys from "../ScienceCategoryToys/ScienceCategoryToys";

const ToyCategories = () => {
  return (
    <div className="text-center mt-32">
      <div className="bg-primary inline-block mb-16 p-5 rounded-2xl">
        <p className="text-center text-6xl font-bold font-font4 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-secondary  ">
          Shop By Category
        </p>
      </div>
      <Tabs>
        <TabList className="font-font2 font-bold text-lg mb-5 text-black bg-accent mx-12 rounded-2xl">
          <Tab>Math Toys</Tab>
          <Tab>Engineering toys</Tab>
          <Tab> Science Toys</Tab>
          <Tab>Language Toys</Tab>
        </TabList>

        <TabPanel>
          <MathCategoryToys></MathCategoryToys>
        </TabPanel>
        <TabPanel>
          <EngineeringCategoryToys></EngineeringCategoryToys>
        </TabPanel>
        <TabPanel>
          <ScienceCategoryToys></ScienceCategoryToys>
        </TabPanel>
        <TabPanel>
          <LanguageCategoryToys></LanguageCategoryToys>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyCategories;
