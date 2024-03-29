import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div footer className='py-3' style={{ backgroundColor: '#D2D4F9', color: 'black' }}>
                <div className='container'>
                <nav className='row justify-content-between'>
                    <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                        <img src="/Natu_Logo_.png" alt="Logo" className="img-fluid" width="150" height="50"/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled px-3'>
                            <li className='fw-bold fs-7 mb-2'>NATU Tienda Orgánica</li>
                            <li className='text-justify'>Encuentra productos orgánicos de calidad en esta, tu tienda web de confianza</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled px4'>
                            <li className='fw-bold fs-7 mb-2'>Enlaces</li>
                            <li>
                                <Link to ='/' class='text-reset'>Inicio</Link>
                            </li>
                            <li>
                                <Link to ='/Products' class='text-reset'>Productos</Link>
                            </li>
                            <li>
                                <Link to ='/about' class='text-reset'>About</Link>
                            </li>
                            <li>
                                <Link to ='/contact' class='text-reset'>Contact</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled px-5 text-center'>
                            <li className='fw-bold fs-7 mb-2'>Síguenos</li>
                            <li className='d-flex justify-content-between'>
                                <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i> {/* Aquí aumentamos el tamaño del ícono */}
                                <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i> {/* Aquí aumentamos el tamaño del ícono */}
                                <i className="bi bi-tiktok" style={{ fontSize: '2rem' }}></i> {/* Aquí aumentamos el tamaño del ícono */}
                            </li>
                        </ul>
                        <div className='container'>
                            <p className='text-center mb-0 mt-2 fw-bold fs-7 mb-2'>Realizado por el equipo Natu</p>
                        </div>
                    </nav>
                </div>
                          
            </div>

        </div>
    )
}

export default Footer