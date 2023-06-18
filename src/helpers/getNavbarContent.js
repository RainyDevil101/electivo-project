import pageContent from "../refs/pageContent";

export const getNavbarContent = () => {

    const navbarLinks = pageContent.map(({ name, page }) => {
        return {
            name,
            page,
        }
    });

    return {
        navbarLinks,
    };
};

export default getNavbarContent;