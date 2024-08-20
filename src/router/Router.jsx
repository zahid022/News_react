import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Auth from "../components/Auth";
import Dashboard from "../layout/Dashboard";
import AdminAllNews from "../pages/AdminAllNews";
import AdminAddNews from "../pages/AdminAddNews";
import AdminAllCategory from "../pages/AdminAllCategory";
import AdminAddCategory from "../pages/AdminAddCategory";
import ErrorPage from "../components/ErrorPage";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Route>
            <Route path="/admin" element={
                <Auth>
                    <Dashboard />
                </Auth>}>
                <Route path="/admin" index element={<AdminAllNews />} />
                <Route path="add" element={<AdminAddNews />} />
                <Route path="category" element={<AdminAllCategory />} />
                <Route path="addcat" element={<AdminAddCategory />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </>
    )
)