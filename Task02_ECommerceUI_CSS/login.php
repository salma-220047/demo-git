<?php
session_start();
include 'db.php';
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    $sql = "SELECT id, name, password FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            header("Location: dashboard.html"); // Redirect to dashboard
            exit();
        } else {
            $error = "Invalid password!";
        }
    } else {
        $error = "No user found with that email!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Nexora</title>
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
                <h2>Welcome Back</h2>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Access your Nexora account.</p>
            </div>
            
            <div class="auth-toggle">
                <a href="login.php" class="toggle-btn active" id="loginToggle">Login</a>
                <a href="register.php" class="toggle-btn" id="signupToggle">Sign Up</a>
            </div>

            <?php if($error): ?>
                <div style="background: #ffebee; color: #c62828; padding: 1rem; border-radius: 4px; margin-bottom: 2rem; font-size: 0.9rem; border-left: 4px solid #c62828;">
                    <?php echo $error; ?>
                </div>
            <?php endif; ?>

            <form action="login.php" method="POST">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="name@example.com" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="••••••••" required>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <input type="checkbox" id="remember">
                        <label for="remember" style="margin: 0; font-size: 0.85rem;">Remember me</label>
                    </div>
                    <a href="#" style="font-size: 0.85rem; color: var(--accent);">Forgot password?</a>
                </div>
                <button type="submit" class="btn btn-primary form-submit" style="width: 100%;">Sign In</button>
            </form>

            <div style="text-align: center; margin-top: 2rem;">
                <p style="font-size: 0.9rem; color: var(--text-muted);">
                    Don't have an account? <a href="register.php" style="color: var(--primary); font-weight: 600;">Sign up now</a>
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
