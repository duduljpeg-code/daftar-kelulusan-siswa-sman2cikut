        // Data dummy siswa (dalam dunia nyata, ini bisa dari database)
        // Ditambahkan lebih banyak data, termasuk beberapa yang tidak lulus
        const students = [
            { nisn: "1234567890", nama: "Abdul Hanansah", kelas: "XI.J", lulus: true },
            { nisn: "0987654321", nama: "Achmad Khairul Mizan", kelas: "XI.J", lulus: true },
            { nisn: "1122334455", nama: "Ridho Santoso", kelas: "XI.J", lulus: true },
            { nisn: "1122334455", nama: "kevinn triner", kelas: "XI.J", lulus: true },
            { nisn: "5566778899", nama: "Tombul", kelas: "XII ", lulus: false },
            { nisn: "2233445566", nama: "Rizki Bogor", kelas: "XII ", lulus: false },
            { nisn: "7788990011", nama: "Rizki Kerupuk", kelas: "XII ", lulus: false },
            { nisn: "3344556677", nama: "Raihan Bogor", kelas: "XII ", lulus: true },
            { nisn: "07032009", nama: "Kaila Nabila Maulida", kelas: "XII ", lulus: true },
            // Tambahkan lebih banyak data jika diperlukan
        ];

        // Link grup WhatsApp (statis, bisa diganti dengan dinamis jika perlu)
        const whatsappLink = "https://chat.whatsapp.com/JcrRd89FlFB59qxMxQNboL?mode=gi_t"; // Ganti dengan link grup WhatsApp yang sebenarnya

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const nisn = document.getElementById('nisn').value.trim();
            const resultDiv = document.getElementById('result');
            
            // Cari siswa berdasarkan NISN
            const student = students.find(s => s.nisn === nisn);
            
            if (student) {
                const status = student.lulus ? "Lulus" : "Tidak Lulus";
                // Link WhatsApp hanya ditampilkan jika siswa lulus
                const whatsappHtml = student.lulus ? `<p><a href="${whatsappLink}" target="_blank">Bergabung ke Grup WhatsApp</a></p>` : '';
                resultDiv.innerHTML = `
                    <p><strong>Nama:</strong> ${student.nama}</p>
                    <p><strong>Kelas:</strong> ${student.kelas}</p>
                    <p><strong>Status:</strong> ${status}</p>
                    ${whatsappHtml}
                `;
                resultDiv.className = 'result';
            } else {
                resultDiv.innerHTML = "<p>Data siswa tidak ditemukan. Pastikan NISN benar.</p>";
                resultDiv.className = 'result error';
            }
            
            resultDiv.style.display = 'block';

        });
