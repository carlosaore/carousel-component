import Carousel, { slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const BrainReactCarousel = () => (
    <Carousel
        plugins={[
            'centered',
            'infinite',
            'arrows',
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 2,
                },
            },
        ]}   
    >
        <img src="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
    </Carousel>
);

export default BrainReactCarousel;