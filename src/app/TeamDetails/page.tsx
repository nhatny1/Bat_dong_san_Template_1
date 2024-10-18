import React from 'react';
import styles from './TeamDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const TeamDetails = () => {
  return (
    <div>
      {/* Banner Section */}
      

     {/* Team Details Section */}
          <section className={styles.teamDetailsSection}>
            <div className={`${styles.teamDetailsBox} flex flex-col lg:flex-row items-center lg:items-start lg:gap-8`}>
              <div className={`${styles.leftImage}`}>
                <img src="/images/image/416x414/team-details-img.jpg" alt="Albert Mills" className="w-[416px] h-[494px] object-cover mx-auto" />
              </div>
              <div className={`${styles.rightDetails} lg:w-1/2`}>
                <h2 className="mb-4 font-bold text-2xl">Albert Mills</h2>
                <div className={styles.detailRow}>
                  <p><strong>Position:</strong></p>
                  <p className={styles.detailRow1}>Co-Founder</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Practice Area:</strong></p>
                  <p className={styles.detailRow1}>Realestate Agent</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Experience:</strong></p>
                  <p className={styles.detailRow1}>12 Years</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Address:</strong></p>
                  <p className={styles.detailRow1}>Millington Ave, TN 38053</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Phone:</strong></p>
                  <p className={styles.detailRow1}>+00 568 746 987</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Email:</strong></p>
                  <p className={styles.detailRow1}>youremail@gmail.com</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Website:</strong></p>
                  <p className={styles.detailRow1}>yourwebsitehere.com</p>
                </div>
                <div className={styles.detailRow}>
                  <p><strong>Fax:</strong></p>
                  <p className={styles.detailRow1}>568 746 987</p>
                </div>
                <div className={styles.socialIcons}>
                      <a href="#" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"/></svg>
                      </a>
                      <a href="#" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="51px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                      </a>
                      <a href="#" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="51px" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
                      </a>
                      <a href="#" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="51px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
                      </a>
                </div>

              </div>
            </div>

              {/* Summary Section */}
              <div className={`${styles.summarySection} max-w-5xl mx-auto`}>
                <h3 className={`${styles.summaryTitle} text-2xl font-bold mb-4`}>Summary</h3>
                <p className={`${styles.summaryContent} text-lg`}>
                  The Consulting is an individual certified to have a varying degree of knowledge 
                  of general involved in exercise prescription and instruction. They motivate clients 
                  by setting goals and providing feedback and accountability to clients.
                </p>
              </div>
            </section>

            {/* Our Team Section */}
      <section className="bg-[#1a1a1a] text-[#cfcfcf] py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-[55px] text-3xl mb-4 text-white font-serif">
          Our Team of Experts
        </h2>

          <p className="text-lg mb-8 w-[620px] text-[17px] text-center mx-auto">
            Trage agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaboration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
            {/* Team Member 1 */}
            <div className={`${styles['team-item']} bg-[#1a1b1d] p-0 border border-gray-400`}>
              <img
                className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                src="/images/image/416x414/team-2.jpg"
                alt="Riyan Parag"
              />
              <div className="p-4">
                <h3 className="mt-2 text-xl font-bold text-white">Riyan Parag</h3>
                <p>Agent</p>
              </div>
              {/* Icons */}
              <div className={styles['team-social']}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className={`${styles['team-item']} bg-[#1a1b1d] p-0 border border-gray-400`}>
              <img
                className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                src="/images/image/416x414/team-2.jpg"
                alt="Albert Mills"
              />
              <div className="p-4">
                <h3 className="mt-2 text-xl font-bold text-white">Albert Mills</h3>
                <p>Co-Founder</p>
              </div>
              {/* Icons */}
              <div className={styles['team-social']}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className={`${styles['team-item']} bg-[#1a1b1d] p-0 border border-gray-400`}>
              <img
                className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                src="/images/image/416x414/team-2.jpg"
                alt="David William"
              />
              <div className="p-4">
                <h3 className="mt-2 text-xl font-bold text-white">David William</h3>
                <p>Main Architect</p>
              </div>
              {/* Icons */}
              <div className={styles['team-social']}>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
           {/* Follow Us Section */}
     <section className="pt-1 py-3" style={{ backgroundColor: '#2b2c30' }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16">Follow us</h2>
                    <p className="text-center text-gray-200 mx-auto leading-relaxed text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xl">
                        Trage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaboration.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                    {/* Follow Item */}
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Repeat other follow items */}
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                             src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                             src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <a
                        href="#"
                        className="bg-[#2f2f2f] border border-[#bd8c62] text-[#bd8c62] font-jost inline-block text-lg font-medium leading-none capitalize py-3 px-8 tracking-normal rounded-none relative z-10 overflow-hidden group"
                    >
                        <span className="relative z-10 text-sm">Follow @Beauly.Home</span>
                        <div className="absolute inset-0 bg-white opacity-20 w-[50px] h-[155px] transform rotate-[35deg] top-[-50px] left-[-75px] transition-all duration-[1000ms] ease-in-out group-hover:left-[120%] z-[-1]"></div>
                    </a>
                </div>
            </div>
        </section>
          </div>
  );
};

export default TeamDetails;
