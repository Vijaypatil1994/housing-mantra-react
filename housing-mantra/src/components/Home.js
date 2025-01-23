import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';

function Home() {
    const [marker, setMarker] = useState(null);
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const mapRef = useRef(null); 

    useEffect(() => {
        const mapOptions = {
            center: [51.958, 9.141],
            zoom: 10,
        };

      
        mapRef.current = L.map('map', mapOptions);

       
        const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        layer.addTo(mapRef.current);

      
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;

      
        const map = mapRef.current;

        if (marker) {
            marker.remove();
        }

        const newMarker = L.marker([lat, lng]).addTo(map);
        setMarker(newMarker);

        document.getElementById('latitude').value = lat.toFixed(6);
        document.getElementById('longitude').value = lng.toFixed(6);
    };

    useEffect(() => {
        const map = mapRef.current;
        if (map) {
            map.on('click', handleMapClick);
        }

        return () => {
            const map = mapRef.current;
            if (map) {
                map.off('click', handleMapClick);
            }
        };
    }, [marker]); 

    const handleImageChange = (event) => {
        const fileArray = Array.from(event.target.files);
        const newImages = fileArray.map((file) => ({
            file,
            description: '',
            url: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleDescriptionChange = (index, event) => {
        const newImages = [...images];
        newImages[index].description = event.target.value;
        setImages(newImages);
    };

    const handleRemoveImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const handleAddUrlInput = () => {
        setUrls((prevUrls) => [...prevUrls, '']);
    };

    const handleUrlChange = (index, e) => {
        const updatedUrls = [...urls];
        updatedUrls[index] = e.target.value;
        setUrls(updatedUrls);
    };

    return (
        <>
            <div className="content mb-5">
                <div className="dashboard-content px-3 pt-4">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <i className="fa-solid fa-table-columns me-3"></i>
                                <a href="#">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Project</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Edit</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Data
                            </li>
                        </ol>
                    </nav>
                </div>



                <div className="container my-5">
                    <div className="row">
                        <h2 className="fs-5"> Update Amenities</h2>
                        <p>Fill out the amenities below about this new project</p>

                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar bg-orange" style={{ width: '80%' }}>80%</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8 col-12'>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5>Amenities</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="text-end">
                                        <h6>Select All</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <ul className="unstyled centered">
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                                            <label for="styled-checkbox-1">School in Vicinity</label>
                                        </li>

                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" />
                                            <label for="styled-checkbox-2">Near City Center</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value3" />
                                            <label for="styled-checkbox-3">Breakthrough Price</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4" />
                                            <label for="styled-checkbox-4">High Rental Yield</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value5" />
                                            <label for="styled-checkbox-5">Well Ventilated</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value6" />
                                            <label for="styled-checkbox-6">Spacious</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value7" />
                                            <label for="styled-checkbox-7">Gated Society</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-8" type="checkbox" value="value8" />
                                            <label for="styled-checkbox-8">Luxury Lifestyle</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-9" type="checkbox" value="value9" />
                                            <label for="styled-checkbox-9">Newly Built</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value10" />
                                            <label for="styled-checkbox-10">Females Only</label>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md-4 col-12">
                                    <ul className="unstyled centered">
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-11" type="checkbox" value="value11" />
                                            <label for="styled-checkbox-11">Adjoining Metro Station</label>
                                        </li>

                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-12" type="checkbox" value="value12" />
                                            <label for="styled-checkbox-12">Safe&Secure Locality</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-13" type="checkbox" value="value13" />
                                            <label for="styled-checkbox-13">Quick Deal</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-14" type="checkbox" value="value14" />
                                            <label for="styled-checkbox-14">Affordable</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-15" type="checkbox" value="value15" />
                                            <label for="styled-checkbox-15">Fully Renovated</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-16" type="checkbox" value="value16" />
                                            <label for="styled-checkbox-16">Ample Parking</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-17" type="checkbox" value="value17" />
                                            <label for="styled-checkbox-17">Tasteful Interior</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-18" type="checkbox" value="value18" />
                                            <label for="styled-checkbox-18">Well Maintained</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-19" type="checkbox" value="value19" />
                                            <label for="styled-checkbox-19">Family</label>
                                        </li>

                                    </ul>

                                </div>
                                <div className="col-md-4 col-12">
                                    <ul className="unstyled centered">
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-21" type="checkbox" value="value21" />
                                            <label for="styled-checkbox-21">Peaceful Viciniry</label>
                                        </li>

                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-22" type="checkbox" value="value22" />
                                            <label for="styled-checkbox-22">Desperate Sale</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-23" type="checkbox" value="value23" />
                                            <label for="styled-checkbox-23">Investment Opportunity</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-24" type="checkbox" value="value24" />
                                            <label for="styled-checkbox-24">Reputed Builder</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-25" type="checkbox" value="value25" />
                                            <label for="styled-checkbox-25">Vastu Compliant</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-26" type="checkbox" value="value26" />
                                            <label for="styled-checkbox-26">Free Hold</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-27" type="checkbox" value="value27" />
                                            <label for="styled-checkbox-27">Prime Location</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-28" type="checkbox" value="value28" />
                                            <label for="styled-checkbox-28">Plenty Of Sunlight</label>
                                        </li>
                                        <li>
                                            <input className="styled-checkbox" id="styled-checkbox-29" type="checkbox" value="value29" />
                                            <label for="styled-checkbox-29">Bachelors</label>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form action="" method="post" enctype="multipart/form-data" id="form-upload">
                                        <div className="form-group mt-5">
                                            <label htmlFor="upload-img">Images</label>

                                            <input
                                                type="file"
                                                className="form-control"
                                                name="images[]"
                                                multiple
                                                id="upload-img"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                        <div className="img-thumbs img-thumbs-hidden" id="img-preview"></div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <form>
                                    <div className="url-container">
                                        <label htmlFor="youtube-urls">YouTube URLs</label>
                                        <div id="url-list my-3">
                                            <input type="url" name="youtube-url[]" placeholder="Enter YouTube URL" required className="form-control form-control-sm" />
                                        </div>
                                        <div id="url-list my-3">
                                            {urls.map((url, index) => (
                                                <div key={index}>
                                                    <input
                                                        type="url"
                                                        name="youtube-url[]"
                                                        placeholder="Enter YouTube URL"
                                                        required
                                                        className="form-control form-control-sm my-2"
                                                        value={url}
                                                        onChange={(e) => handleUrlChange(index, e)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-main my-2"
                                            onClick={handleAddUrlInput}
                                        >
                                            Add another URL
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="row gray-border">
                                <div className="col-md-6 col-12">
                                    <h6>Is the project RERA registered?</h6>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="text-end">
                                        <form>
                                            <label className="radio-inline">
                                                <input type="radio" name="optradio" checked className="btn btn-sm btn-main" />Yes
                                                <input type="radio" name="optradio" className="btn btn-sm btn-main" />No
                                            </label>


                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <form>
                                    <label for="rera-number" className="form-label">RERA Number(s)</label>
                                    <input type="text" name="txtname" id="txtname" className="form-control form-control-sm"
                                        placeholder="Enter RERA Number" />
                                </form>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <label for="rera-number" className="form-label">Landmark</label>
                                            <select className="form-select form-select-sm">
                                                <option>Park</option>
                                                <option>Train Station</option>
                                                <option>Bus Stop</option>
                                                <option>Metro Station</option>
                                                <option>Shopping Mall</option>
                                                <option>Hospital</option>
                                                <option>School</option>
                                                <option>Beach</option>
                                                <option>City Center</option>

                                            </select>
                                        </div>
                                        <div className="col">
                                            <label for="rera-number" className="form-label">Distance</label>
                                            <input type="password" className="form-control form-control-sm" placeholder="e.g,5km" name="pswd" />
                                        </div>
                                    </div>
                                </form>
                                <form>
                                    <label for="rera-number" className="form-label">Description</label>
                                    <textarea className="form-control form-control-sm" row="50" cols="40"
                                        placeholder="Enter Description"></textarea>
                                </form>
                            </div>


                            <div className="row wrap my-3 align-items-center">
                                <div className='col-md-8 col-12'>
                                    <form className="form">
                                        Latitude
                                        <input type="text" id="latitude" className="form-control form-control-sm" placeholder="Latitude" readOnly />
                                        Longitude
                                        <input type="text" id="longitude" className="form-control form-control-sm" placeholder="Longitude" readOnly />
                                    </form>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div id="map" style={{ height: '250px' }}></div>
                                </div>


                            </div>


                            <div className="row my-3">
                                <div className="col-md-6 col-12">
                                    <div className="text-start">
                                        <button className="btn btn-sm btn-main">Previous</button>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="text-end">
                                        <button className="btn btn-sm btn-main">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}

export default Home;
