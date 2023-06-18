import pageContent from '../refs/pageContent';

export const getContent = (pathName = '') => {

    const pageContentData = pageContent.find(page => page.page === pathName) || 'Path not created :p';

    return {
        ...pageContentData,
    };
};

export default getContent;