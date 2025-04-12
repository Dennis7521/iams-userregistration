// RegistrationForm.tsx
import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentID: '',
    email: '',
    password: '',
    confirmPassword: '',
    projectTypes: [] as string[],
    preferredLocation: '',
    skills: '',
    termsAccepted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, value]
        : prev.projectTypes.filter(pt => pt !== value)
    }));
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.registrationContainer}>
      <h1>Industrial Attachment Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="studentID">Student ID</label>
          <input
            type="text"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">University Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Preferences Section */}
        <div className={styles.preferencesGroup}>
          <div className={styles.formGroup}>
            <label>Preferred Project Types</label>
            <div className={styles.checkboxGroup}>
              {['Web Development', 'Data Science', 'Mobile Development', 'Cybersecurity'].map((type) => (
                <label key={type} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={formData.projectTypes.includes(type)}
                    onChange={handleCheckboxChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="preferredLocation">Preferred Location</label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Location</option>
              <option value="gaborone">Gaborone</option>
              <option value="francistown">Francistown</option>
              <option value="maun">Maun</option>
              <option value="kasane">Kasane</option>
            </select>
          </div>
        </div>

        {/* Additional Information */}
        <div className={styles.formGroup}>
          <label htmlFor="skills">Technical Skills</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            rows={3}
            placeholder="List your technical skills (comma separated)"
          />
        </div>

        {/* Terms and Conditions */}
        <div className={styles.terms}>
          <input
            type="checkbox"
            id="terms"
            checked={formData.termsAccepted}
            onChange={handleTermsChange}
            required
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="submit">Register for Industrial Attachment</button>
      </form>
    </div>
  );
};

export default RegistrationForm;