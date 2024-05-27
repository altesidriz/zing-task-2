import blogImages from '@/api/blogImages';

const getImage = (id) => {
    const filter = blogImages.find(element => element.id == id );
    const imageUrl = filter.url;
    return imageUrl;
};

export default getImage;