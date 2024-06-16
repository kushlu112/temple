// src/components/Home.js
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the CSS
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Grid, Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material';


const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1',
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2',
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3',
    },
];

// Array of images for the gallery
const galleryImages = [
    // Add your image URLs and titles here
    { url: 'image1.jpg', title: 'Image 1' },
    { url: 'image2.jpg', title: 'Image 2' },
    { url: 'image2.jpg', title: 'Image 2' },
    { url: 'image2.jpg', title: 'Image 2' },
    { url: 'image2.jpg', title: 'Image 2' },
    { url: 'image2.jpg', title: 'Image 2' },
    // More images...
];

const seva = [
    {
        title: 'Ganesh Puja',
        image: 'path_to_ganesh_puja_image',
        description: 'Description of Ganesh Puja...',
        // Add more properties if needed
    },
    {
        title: 'Ganesh Puja',
        image: 'path_to_ganesh_puja_image',
        description: 'Description of Ganesh Puja...',
        // Add more properties if needed
    },
    {
        title: 'Ganesh Puja',
        image: 'path_to_ganesh_puja_image',
        description: 'Description of Ganesh Puja...',
        // Add more properties if needed
    },
    // ... other puja items
];

const Home = () => {

    return (
        <div className="slide-container" style={{ padding: '20px' }}>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div
                            style={{
                                backgroundImage: `url(${slideImage.url})`,
                                backgroundSize: 'cover',
                                height: '460px',
                                display: '200px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span>
                                {/* {slideImage.caption} */}
                            </span>
                        </div>
                    </div>
                ))}
            </Slide>
            <br />

            {/* Photo Gallery Section */}
            <h2 style={{ textAlign: 'center', paddingTop: '64px' }} id="gallary">Photo Gallery</h2>

            {/* Photo Gallery Section */}
            <Grid container spacing={2} >
                {galleryImages.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image.url}
                                alt={image.title}
                            />
                            {/* ... (CardContent for title) */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <section className="description-section">
                <h2 style={{ textAlign: 'center', paddingTop: '64px' }}>Description</h2>
                <p>
                    Welcome to our website! We specialize in providing top-notch services and products.
                    Our commitment to quality and customer satisfaction sets us apart from the competition.
                    Explore our site to learn more about what we offer, and don't hesitate to reach out with any questions.
                </p>
            </section>

            {/* Puja Section */}
            <section id="puja-section" style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', paddingTop: '64px' }} id='seva'>Seva's</h2>
                <Grid container spacing={2}>
                    {seva.map((puja, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={puja.image}
                                    alt={puja.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {puja.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {puja.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small" variant="contained" color="primary">
                                        Book Now
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            {/* ... other sections */}



            <div id="about-us" >
                {/* About Us Section */}
                <section style={{ paddingTop: '64px' }}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        {/* Add more content here */}
                    </p>
                </section>
            </div>

            <div>
                {/* Contact Us Section */}
                <section id="contact-us" style={{ paddingTop: '64px' }}>
                    <h2>Contact Us</h2>

                    <div>
                        {/* Google Map */}
                        <div id="maps" style={{ display: 'flex'}}>
                            {/* Left part (map) */}
                            <div style={{ flex: 1 }}>
                                <LoadScript googleMapsApiKey="YOUR_API_KEY">
                                    <GoogleMap
                                        mapContainerStyle={{ height: '400px', width: '100%' }}
                                        center={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
                                        zoom={10} // Set your desired zoom level
                                    >
                                        <Marker position={{ lat: 37.7749, lng: -122.4194 }} /> {/* Add a marker */}
                                        {/* Customize your map here */}
                                    </GoogleMap>
                                </LoadScript>
                            </div>

                            {/* Right part (address) */}
                            <div id="address" style={{ flex: 1, padding: '20px', textAlign: 'center', paddingTop: '64px' }}>
                                <h2>Address</h2>
                                <p>123 Main Street</p>
                                <p>City, State ZIP</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Other content */}
            </div>
        </div>
    );
};

export default Home;
