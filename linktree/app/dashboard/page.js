"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import { useState, useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const [name, setName] = useState("");
  const { user, isLoaded } = useUser();
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLink, setEditingLink] = useState(null);
  const [editName, setEditName] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 }
    }
  };

  const linkItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: -50,
      transition: { duration: 0.2 }
    }
  };

  // Fetch all links on component mount
  useEffect(() => {
    if (isLoaded && user) {
      fetchLinks();
    }
  }, [isLoaded, user]);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/links`); // ✅ removed userId param
      if (res.ok) {
        const data = await res.json();
        setLinks(data);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !url) {
      alert("Please fill in both fields");
      return;
    }

    if (!isLoaded || !user) {
      alert("User not logged in");
      return;
    }

    // Basic URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      alert("Please enter a valid URL (starting with http:// or https://)");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url }), // ✅ removed userId
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Saved:", data);
        setName("");
        setUrl("");
        // Refresh the links list
        fetchLinks();
      } else {
        alert("Error saving link");
      }
    } catch (error) {
      console.error("Error saving link:", error);
      alert("Error saving link");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (linkId) => {
    if (!confirm("Are you sure you want to delete this link?")) {
      return;
    }

    try {
      const res = await fetch(`/api/links`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: linkId }),
      });

      if (res.ok) {
        // Remove the deleted link from the state
        setLinks(links.filter(link => link._id !== linkId));
      } else {
        alert("Error deleting link");
      }
    } catch (error) {
      console.error("Error deleting link:", error);
      alert("Error deleting link");
    }
  };

  const handleEditStart = (link) => {
    setEditingLink(link._id);
    setEditName(link.name);
    setEditUrl(link.url);
  };

  const handleEditCancel = () => {
    setEditingLink(null);
    setEditName("");
    setEditUrl("");
  };

  const handleEditSubmit = async (linkId) => {
    if (!editName || !editUrl) {
      alert("Please fill in both fields");
      return;
    }

    // Basic URL validation
    if (!editUrl.startsWith('http://') && !editUrl.startsWith('https://')) {
      alert("Please enter a valid URL (starting with http:// or https://)");
      return;
    }

    try {
      const res = await fetch(`/api/links`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: linkId,
          name: editName,
          url: editUrl
        }),
      });

      if (res.ok) {
        const updatedLink = await res.json();
        // Update the link in the state
        setLinks(links.map(link =>
          link._id === linkId ? updatedLink : link
        ));
        handleEditCancel();
      } else {
        alert("Error updating link");
      }
    } catch (error) {
      console.error("Error updating link:", error);
      alert("Error updating link");
    }
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="min-h-screen w-full flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center p-4  lg:p-0">
        {/* Add Links Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-[#1c1a1e] w-full lg:w-[40%] max-w-lg h-auto lg:h-[80vh] rounded-lg mt-5 flex flex-col justify-center items-center p-6 lg:p-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
              Add New&nbsp;
              <span className='text-[#794be2]'>
                Links
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6 lg:gap-10 w-full max-w-sm">
            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="text"
                value={name}
                id="website-name"
                className="text-white floating-input w-full px-4 py-3 border-2 border-gray-500 rounded-lg placeholder-transparent focus:border-[#794be2] transition-colors"
                placeholder="Website Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="website-name"
                className="floating-label absolute left-4 top-3 text-gray-500 cursor-text transition-all duration-300"
              >
                Website Name
              </label>
            </div>

            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="url"
                id="website-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-white floating-input w-full px-4 py-3 border-2 border-gray-500 rounded-lg placeholder-transparent focus:border-[#794be2] transition-colors"
                placeholder="https://example.com"
              />
              <label
                htmlFor="website-url"
                className="floating-label absolute left-4 top-3 text-gray-500 cursor-text transition-all duration-300"
              >
                Website URL
              </label>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="p-3 px-8 lg:px-10 cursor-pointer rounded-xl bg-[#794be2] hover:bg-[#6b3bd1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                />
              ) : (
                "Add Link"
              )}
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Display Links Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="justify-center mt-4 bg-[#1c1a1e] w-full lg:w-[40%] max-w-lg h-auto lg:h-[80vh] rounded-lg  flex flex-col"
        >
          <motion.div variants={itemVariants} className="text-center py-6">
            <h2 className="mt-20 text-3xl lg:text-5xl font-semibold leading-tight">
              <span className='text-[#794be2]'>
                Your&nbsp;
              </span>
              Links
            </h2>
          </motion.div>

          <div className="flex-1 overflow-y-auto px-4 lg:px-6 pb-6 min-h-[300px] lg:min-h-0">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-400 mt-10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-[#794be2] border-t-transparent rounded-full mx-auto mb-4"
                  />
                  Loading your links...
                </motion.div>
              ) : links.length === 0 ? (
                <motion.div
                  key="empty"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center text-gray-400 mt-10"
                >

                  No links saved yet. Add your first link!
                </motion.div>
              ) : (
                <motion.div
                  key="links"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  <AnimatePresence>
                    {links.map((link, index) => (
                      <motion.div
                        key={link._id}
                        variants={linkItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="bg-[#2a2832] rounded-lg p-4 hover:bg-[#2f2a37] transition-colors"
                      >
                        {editingLink === link._id ? (
                          // Edit Mode
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-3"
                          >
                            <motion.input
                              whileFocus={{ scale: 1.01 }}
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="w-full bg-[#1c1a1e] text-white px-3 py-2 rounded border border-gray-600 focus:border-[#794be2] outline-none transition-colors"
                              placeholder="Website Name"
                            />
                            <motion.input
                              whileFocus={{ scale: 1.01 }}
                              type="url"
                              value={editUrl}
                              onChange={(e) => setEditUrl(e.target.value)}
                              className="w-full bg-[#1c1a1e] text-white px-3 py-2 rounded border border-gray-600 focus:border-[#794be2] outline-none transition-colors"
                              placeholder="Website URL"
                            />
                            <div className="flex gap-2 justify-end">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleEditSubmit(link._id)}
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
                              >
                                Save
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleEditCancel}
                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm transition-colors"
                              >
                                Cancel
                              </motion.button>
                            </div>
                          </motion.div>
                        ) : (
                          // View Mode
                          <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                            <div className="flex-1 min-w-0 w-full sm:w-auto">
                              <motion.h3
                                whileHover={{ x: 5 }}
                                className="text-white font-medium truncate"
                              >
                                {link.name}
                              </motion.h3>
                              <p className="text-[#794be2] text-sm break-all">
                                {link.url}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                Added: {new Date(link.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto sm:ml-4 justify-end">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleEditStart(link)}
                                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors flex-1 sm:flex-initial"
                              >
                                Edit
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDelete(link._id)}
                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors flex-1 sm:flex-initial"
                              >
                                Delete
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </main>
    </>
  )
}

export default Page
