document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("testimonial-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  // Fetch testimonials data

  fetch("src/data/testimonials.json")
    .then((response) => response.json())
    .then((data) => {
      const testimonials = data.testimonials;

      // Create testimonial cards
      testimonials.forEach((testimonial) => {
        const card = createTestimonialCard(testimonial);
        container.appendChild(card);
      });

      // Handle navigation
      nextBtn.addEventListener("click", () => {
        if (currentIndex < testimonials.length - 3) {
          currentIndex++;
          updateSliderPosition();
        }
      });

      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
        }
      });
    });

  function createTestimonialCard(testimonial) {
    const card = document.createElement("div");
    card.className = `
        flex flex-col items-start p-8 gap-4
        w-[384px] h-[427.2px]
        bg-white border border-[#E2E8F0] 
        shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_6px_rgba(0,0,0,0.07)] 
        rounded-[20px] 
        flex-none order-1 z-1
      `;

    card.innerHTML = `
      <div class="flex gap-2">
          <img src="public/icons/${testimonial.icon}" alt="${testimonial.header}" class="h-8 mb-6">
          <h6 class="text-2xl text-[#475569]">${testimonial.header}</h6>
      </div>
      <p class="text-[#0F172A] mb-6">${testimonial.text}</p>
      <div class="flex items-center gap-4">
          <img src="public/avatars/${testimonial.profile}" 
               alt="${testimonial.full_name}" 
               class="w-16 h-16 rounded-full">
          <div>
              <h4 class="font-semibold text-[#0F172A]">${testimonial.full_name}</h4>
              <p class="text-sm text-[#64748B]">${testimonial.position}</p>
          </div>
      </div>
      `;

    return card;
  }

  function updateSliderPosition() {
    const offset = currentIndex * -424; // 400px card width + 24px gap
    container.style.transform = `translateX(${offset}px)`;
  }
});
