---
date: "2026-01-01"
slug: "baja-daq-telemetry"
title: "Baja SAE Telemetry & DAQ System"
featuredImage: "../images/baja-daq-telemetry/featured.jpg"
imageFolder: "../images/baja-daq-telemetry/"
---

Designed and built a wireless data acquisition system for UB Motorsports' Baja SAE car (#120), combining a Heltec WiFi LoRa 32 V3, Teensy 3.6, and a sensor suite spanning an MPU-6050 IMU, GPS, strain gauges, and hall effect sensors to capture real-time vehicle dynamics during competition and testing.

The system also included a custom wireless axle torque transducer, built around a full Wheatstone bridge paired with an INA128P instrumentation amplifier, to measure drivetrain loads directly on the car.

A key firmware challenge arose when two GPIO pins failed to behave as expected — traced back to the discovery that GPIO43/44 on the Heltec board are internally hardwired to the onboard CP2102 USB-to-serial chip, a non-obvious hardware constraint that required rerouting the affected signals.
