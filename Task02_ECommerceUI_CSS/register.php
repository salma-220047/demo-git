<?php
include 'db.php';
$message = "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    // Check if email exists
    $check_email = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($check_email);

    if ($result->num_rows > 0) {
        $error = "Email already registered!";
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            $message = "Registration successful! <a href='login.php'>Login here</a>";
        } else {
            $error = "Error: " . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register | Nexora</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <a href="index.html" class="logo-wrapper">
                <img src="images/logo.png" alt="Nexora Logo" class="logo-img">
                <span class="logo-text">Nexora</span>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="login.php" class="active">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="auth-wrapper">
        <div class="auth-card">
            <div class="auth-header">
                <h2>Create Account</h2>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Join the Nexora community.</p>
            </div>
            
            <div class="auth-toggle">
                <a href="login.php" class="toggle-btn" id="loginToggle">Login</a>
                <a href="register.php" class="toggle-btn active" id="signupToggle">Sign Up</a>
            </div>

            <?php if($message): ?>
                <div style="background: #e8f5e9; color: #2e7d32; padding: 1rem; border-radius: 4px; margin-bottom: 2rem; font-size: 0.9rem; border-left: 4px solid #2e7d32;">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>

            <?php if($error): ?>
                <div style="background: #ffebee; color: #c62828; padding: 1rem; border-radius: 4px; margin-bottom: 2rem; font-size: 0.9rem; border-left: 4px solid #c62828;">
                    <?php echo $error; ?>
                </div>
            <?php endif; ?>

            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="name@example.com" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn btn-primary form-submit" style="width: 100%;">Create Account</button>
            </form>

            <div style="text-align: center; margin-top: 2rem;">
                <p style="font-size: 0.9rem; color: var(--text-muted);">
                    Already have an account? <a href="login.php" style="color: var(--primary); font-weight: 600;">Login</a>
                </p>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-bottom" style="border: none;">
                <p>&copy; 2026 Nexora. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>
