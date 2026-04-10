
export default function ContactMapSection() {
    return (
        <div className="map-section-contact">
            <div className="google-map">
                <iframe
                    src="https://www.google.com/maps/embed"
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading="lazy"></iframe>
            </div>
        </div>
    )
}
