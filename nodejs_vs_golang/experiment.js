const { performance } = require('perf_hooks');
const os = require('os');

const numTasks = 100; // Jumlah tugas
const taskDuration = 100; // Durasi setiap tugas dalam milidetik

const runExperiment = async () => {
    const startTime = performance.now();

    // Simulasi tugas asinkron
    const tasks = Array.from({ length: numTasks }, (_, index) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${index + 1} completed`);
        }, taskDuration);
    }));

    // Tunggu semua tugas selesai
    await Promise.all(tasks);

    const endTime = performance.now();
    const elapsedTime = endTime - startTime; // Latency dalam milidetik

    // Hitung throughput
    const throughput = numTasks / (elapsedTime / 1000); // Tugas per detik

    console.log(`Total Time: ${elapsedTime.toFixed(2)} ms`);
    console.log(`Throughput: ${throughput.toFixed(2)} tasks/second`);
    console.log(`CPU Cores: ${os.cpus().length}`);
};

runExperiment();
