import React, { useState } from 'react';
import {Link, Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: 'registration.png', label: 'Attachment registration', top: 149, path: '/registration' },
    { icon: 'work.png', label: 'Work', top: 254, path: '/work' },
    { icon: 'notification.png', label: 'Notifications', top: 349, path: '/notifications' },
    { icon: 'settings.png', label: 'Settings', top: 444, path: '/settings' }
  ];

  return (
    <div style={{ 
      width: '1728px',
      height: '1117px',
      position: 'relative',
      background: '#3F4E59',
      overflow: 'hidden',
      borderRadius: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '416px',
        height: '1128px',
        position: 'absolute',
        left: 0,
        top: '-11px',
        background: '#4E5257',
        borderRadius: '20px'
      }}>
        {sidebarItems.map((item, index) => (
  <Link
    key={index}
    to={item.path}  // This will cause a full page reload
    style={{
      position: 'absolute',
      left: '20px',
      right: '20px',
      width: 'calc(100% - 40px)',
      paddingLeft: '20px',
      top: `${item.top - 40}px`,
      height: '80px',
      background: hoveredItem === index ? '#5A5E63' : 'transparent',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      textDecoration: 'none', // Remove underline from link
      color: 'inherit' // Inherit text color
    }}
    onMouseEnter={() => setHoveredItem(index)}
    onMouseLeave={() => setHoveredItem(null)}
  >
    {/* Rest of your content remains the same */}
    <img
      src={item.icon}
      alt={`${item.label} Icon`}
      style={{
        width: '50px',
        height: '50px',
        filter: hoveredItem === index ? 'brightness(1.2)' : 'none',
        transition: 'all 0.3s ease',
        marginRight: '30px'
      }}
    />
    <div style={{
      color: hoveredItem === index ? '#FFFFFF' : '#F5F5F5',
      fontSize: '24px',
      fontWeight: 400,
      transition: 'all 0.3s ease'
    }}>
      {item.label}
    </div>
  </Link>
))}
    
      </div>

      {/* Header Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '50px',
        top: '50px',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsAboutHovered(true)}
      onMouseLeave={() => setIsAboutHovered(false)}
      onClick={() => navigate('/about')}
      >
        <div style={{ 
          color: 'white', 
          fontSize: '24px', 
          marginRight: '20px',
          textDecoration: isAboutHovered ? 'underline' : 'none',
          transition: 'all 0.3s ease'
        }}>
          About us
        </div>
        <img
          src="about-us.png"
          alt="Menu Icon"
          style={{ 
            width: '39px',
            height: '34px',
            filter: isAboutHovered ? 'brightness(1.2)' : 'none',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      {/* Logo and Title Section */}
      <div style={{
        position: 'absolute',
        left: '795px',
        top: '66px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/')}
      >
        <img
          src="logo.png"
          alt="Logo"
          style={{ 
            width: '95px',
            height: '95px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'rotate(360deg)'
            }
          }}
        />
        <div style={{ 
          color: 'white',
          fontSize: '24px',
          lineHeight: '1.4'
        }}>
          Industrial attachment <br />
          Management <br />
          System
        </div>
      </div>

      {/* Main Content Area - This will render the current route */}
      <div style={{
        width: '1200px',
        height: '800px',
        left: '450px',
        top: '250px',
        position: 'absolute',
        backgroundImage: 'url("background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.13)',
        padding: '20px',
        boxSizing: 'border-box',
        color: 'white',
        transition: 'all 0.3s ease',
        ':hover': {
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
        }
      }}>
        <Outlet />
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#ccc',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        © 2025 Industrial Attachment Management System. All rights reserved.
        <div style={{ marginTop: '8px' }}>
          Contact: support@iams.com | Tel: +267 123 4567
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
