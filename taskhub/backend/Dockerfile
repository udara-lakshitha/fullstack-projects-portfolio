# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy Maven/Gradle build output jar into container
COPY target/*.jar app.jar

# Run the jar
ENTRYPOINT ["java","-jar","/app/app.jar"]