package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

const (
	numTasks     = 100                    // Jumlah tugas
	taskDuration = 100 * time.Millisecond // Durasi setiap tugas
)

func heavyOperation(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(taskDuration)
}

func main() {
	startTime := time.Now()

	var wg sync.WaitGroup
	wg.Add(numTasks)

	// Jalankan goroutine untuk setiap tugas
	for i := 1; i <= numTasks; i++ {
		go heavyOperation(i, &wg)
	}

	// Tunggu hingga semua goroutine selesai
	wg.Wait()

	endTime := time.Now()
	elapsedTime := endTime.Sub(startTime) // Latency

	// Hitung throughput
	throughput := float64(numTasks) / elapsedTime.Seconds()

	fmt.Printf("Total Time: %v\n", elapsedTime)
	fmt.Printf("Throughput: %.2f tasks/second\n", throughput)
	fmt.Printf("CPU Cores: %d\n", runtime.NumCPU())
}
