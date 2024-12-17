import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      
      // Update the installable state
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      // Hide the install button
      setIsInstallable(false);
      
      // Clear the saved prompt
      setDeferredPrompt(null);
    };

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Cleanup listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    // Log the result
    //console.log(`User response to the install prompt: ${outcome}`);

    // Clear the prompt
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // If the app is not installable, don't render anything
  if (!isInstallable) return null;

  return (
    <div className="install-prompt p-2 text-center font-bold bg-azure-700 text-white">
      <button 
        onClick={handleInstallClick}
        className="install-button"
      >
        Instal·la l' aplicació al teu dispositiu
      </button>
    </div>
  );
};

export default InstallPrompt;