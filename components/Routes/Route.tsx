import { Routes, Route } from 'react-router-dom';
import React from 'react'

const Route = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default Route
