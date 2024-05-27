import blogImages from '@/api/blogImages';

const getMoreBlog = (id) => {
    const filter = blogImages.find(element => element.id == id );
    const moreBlog = filter.descr;
    return moreBlog;
};

export default getMoreBlog;